"use client";
import { useSupabase } from "./supabase-provider";
import { Session } from "@supabase/supabase-js";
import React, { createContext, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

interface USER {
  email: string | null;
  created_at: string | null;
  id: string | null;
  user_name: string | null;
  avatar_url: string;
}
interface ContextI {
  user: USER | null;
  error: any;
  isLoading: boolean;

  signOut: () => Promise<void>;
  SignUPwithEmailandPassword: (
    email: string,
    password: string
  ) => Promise<string | null>;
  signInWithGithub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<string | null>;
}

const Context = createContext<ContextI>({
  user: null,
  error: null,
  isLoading: true,
  signOut: async () => {},
  SignUPwithEmailandPassword: async (email: string, password: string) => null,
  signInWithGithub: async () => {},
  signInWithGoogle: async () => {},
  signInWithEmail: async (email: string, password: string) => null,
});

export default function SupabaseAuthProvider({
  serverSession,
  children,
}: {
  serverSession: Session | null;
  children: React.ReactNode;
}) {
  const supabase = useSupabase();
  const router = useRouter();

  const getUser = async () => {
    const { data: user, error } = await supabase
      .from("user")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
    if (error) {
      console.log(error);
      return null;
    } else {
      return user;
    }
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-session", serverSession?.user?.id],
    queryFn: getUser,
    enabled: !!serverSession?.user.id,
  });

  const SignUPwithEmailandPassword = async (
    email: string,
    password: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return error.message;
    }

    return null;
  };

  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return error.message;
    }

    return null;
  };
  const getURL = () => {
    let url =
      process?.env?.NEXT_PROD_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "http://localhost:3000/";
    url = url.includes("http") ? url : `https://${url}`;

    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
  };
  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: getURL() },
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: getURL() },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, serverSession?.access_token]);

  const value = {
    user,
    isLoading,
    error,
    signInWithEmail,
    SignUPwithEmailandPassword,
    signInWithGithub,
    signInWithGoogle,
    signOut,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAuth = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used inside SupabaseAuthProvider");
  } else {
    return context;
  }
};
