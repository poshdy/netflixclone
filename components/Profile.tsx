"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "./Providers/supabase-auth-provider";
import {
  BadgeCheck,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";


const Profile = () => {
  const { user, signOut } = useAuth();
  // console.log(data)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
    <Avatar>
      <AvatarImage src={user?.avatar_url}/>
    </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck className="w-4 h-4 mr-2" />
            <span>{user?.user_name || user?.email}</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            < User  className="w-4 h-4 mr-2" />
            <Link href={"/profile"}>Profile</Link>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
