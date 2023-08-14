"use client";
import React, { use, useEffect, useState } from "react";
import { Input } from "./ui/input";
import useSWR from "swr";
import { useDebounce } from "@/hooks/use-debounce";
import Image from "next/image";
import { imgUrl } from "@/constants";
import Link from "next/link";
const SearchBar = () => {
  const [Movies, setMovies] = useState([]);
  const [query, setQuery] = useState<string | null>("");
  const debouncedValue = useDebounce(query, 700);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/api/search?query=${debouncedValue}`);
      const data = await res.json();
      setMovies(data);
    };
    if (debouncedValue) fetcher();
  }, [debouncedValue]);

  // const { data } = useSWR("/api/search", fetcher);

  return (
    <div className="p-4  duration-300 ease-in-out">
      <Input
        onChange={(e) => setQuery(e.target.value)}
        className={
          "placeholder:text-xs placeholder:font-bold bg-transparent border-secondary/60 rounded-full h-9"
        }
        placeholder="Movie,Show,Name"
      />
      <h1 className="text-xl md:text-2xl pl-1 font-bold ">Movies & Tv</h1>

      <section className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 content-center justify-items-center ">
        {Movies.map((q: MOVIE) => (
          <Link
            key={q.id}
            href={
              q.media_type === "movie" ? `/movies/${q.id}` : `/tvshows/${q.id}`
            }
          >
            <Image
            className="rounded-md shadow-md"
              sizes="max-w-200px  max-h-350px"
              width={200}
              height={300}
              alt="movie"
              src={imgUrl + q.poster_path}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SearchBar;
