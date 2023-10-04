"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Search } from "lucide-react";
import { useAuth } from "./Providers/supabase-auth-provider";
import Profile from "./Profile";
interface Iprop {
  path: string;
}
const MobileNav = ({ path }: Iprop) => {
  const { user } = useAuth();
  return (
    <nav className="container py-2 sticky top-0 z-10  block md:hidden">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={100} height={31} loading="lazy" alt="logo" />
        </Link>
        <div className="flex items-center gap-2">
          <Link prefetch={false} href={"search"}>
            <Search />
          </Link>

          {user && <Profile />}
        </div>
      </div>
      <div className="md:hidden flex items-center justify-start gap-2 mt-1">
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            className={` ${
              link.path === path && " font-semibold bg-secondary/50"
            } font-medium rounded-2xl text-sm bg-transparent border-2 border-secondary text-secondary px-2 py-1 hover:bg-secondary/50 duration-300 ease-in-out`}
            href={`${link.id}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
