"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/public/Logo.png";
import { NavLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { useAuth } from "./Providers/supabase-auth-provider";
import Profile from "./Profile";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const path = usePathname();

  // change nav color while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-20 duration-300 ease-in-out p-2  ${
        scrolled ? "bg-background" : "bg-background/60"
      }`}
    >
      <nav className="container pt-2 hidden md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              loading="lazy"
              placeholder="blur"
              width={150}
              height={75}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              className={` ${
                link.path === path && "text-red-700 font-semibold"
              } font-medium text-sm duration-300 ease-in-out hover:text-red-700`}
              href={`${link.path}`}
            >
              {link.name}
            </Link>
          ))}

          <Link href={"search"}>
            <Search />
          </Link>
          {user && <Profile />}
        </div>
      </nav>
      <MobileNav path={path} />
    </header>
  );
};

export default NavBar;
