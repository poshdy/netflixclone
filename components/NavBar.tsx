"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/public/Logo.png";
import { NavLinks } from "@/constants";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import { useAuth } from "./Providers/supabase-auth-provider";
import Profile from "./Profile";
import { Search } from "lucide-react";
import { useProModal } from "@/hooks/use-modal";
const NavBar = () => {
  const { isOpen, onClose, onOpen } = useProModal();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const toggle = () => {
    isOpen === true ? onClose() : onOpen();
  };

  return (
    <header
      className={` sticky top-0 z-20 duration-300 ease-in-out ${
        scrolled ? "bg-black/70 " : "bg-transparent"
      }`}
    >
      <nav className="container pt-2 hidden md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              placeholder="blur"
              width={150}
              height={75}
              alt="logo"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                className="font-semibold text-sm  duration-300 ease-in-out hover:text-primary"
                href={`${link.id}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search onClick={() => toggle()} size={20} />
          {user && <Profile />}
        </div>
      </nav>
      <MobileNav toggle={toggle} />
    <section className={` duration-300 ease-in-out bg-opacity-80 bg-black w-full h-screen absolute ${isOpen ? ' right-0 top-20' :'right-[-500%]'}`}>
    <SearchBar />
    </section>
    </header>
  );
};

export default NavBar;

/* <MobileNav/> */
// {isOpen && (
//   <div className="bg-opacity-20  backdrop-blur-lg rounded-t-2xl drop-shadow-lg w-full h-screen duration-300 ease-in-out absolute right-0 top-20">
//    
//   </div>
// )}