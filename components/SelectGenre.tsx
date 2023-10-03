"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Genres } from "@/constants";
type Props = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
};

const SelectGenre = ({ setGenre }: Props) => {
  return (
    <section className="flex flex-col items-start gap-1">
      <Label className="font-bold text-lg" htmlFor="genre">
        Genre
      </Label>
      <select
        className="font-semibold  rounded-2xl text-[10px] bg-transparent border-2 border-secondary text-secondary px-2 py-1 hover:bg-secondary/50 duration-300 ease-in-out hover:text-primary"
        id="genre"
        onChange={(e) => setGenre(e.target.value)}
      >
        {Genres.map((genre) => (
          <option key={genre.id} value={JSON.stringify(genre.id)}>
            {genre.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectGenre;
