"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setQuery }: Props) => {
  return (
    <div className="p-4 duration-300 ease-in-out">
      <Input
        onChange={(e) => setQuery(e.target.value)}
        className={
          "placeholder:text-xs placeholder:font-bold bg-transparent border-secondary/60 rounded-full h-9"
        }
        placeholder="Movie,Show,Name"
      />
    </div>
  );
};

export default SearchBar;
