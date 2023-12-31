import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import { createClient } from "@/lib/supabase-server";
import SupabaseProvider from "@/components/Providers/supabase-provider";
import SupabaseAuthProvider from "@/components/Providers/supabase-auth-provider";
import { Toaster } from "@/components/ui/toaster";
import Modal from "@/components/Modal";
import ReactQueryProvider from "@/components/Providers/react-query-provider";

export const dynamic = "force-dynamic";
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "500", "700", "900", "800"],
  style: ["normal"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Netflix clone",
  description: "Netflix clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-gradient-to-br from-gray-950 to-background relative text-primary dark antialiased ${poppins.className}`
        )}
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>
          <SupabaseProvider>
            <SupabaseAuthProvider serverSession={session}>
              <NavBar />

              <main className="container">{children}</main>
              <Toaster />

              <Modal />
            </SupabaseAuthProvider>
          </SupabaseProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
