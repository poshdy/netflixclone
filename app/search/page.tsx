"use client";
import SearchBar from "@/components/SearchBar";
import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { imgUrl } from "@/constants";
import Link from "next/link";

type Props = {};

const SearchPage = (props: Props) => {
  const [query, setQuery] = useState<string>("");
  const debouncedValue = useDebounce(query, 700);

  const fetcher = async () => {
    const res = await fetch(`/api/search?query=${debouncedValue}`);
    return await res.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["search", debouncedValue],
    queryFn: () => fetcher(),
  });
  return (
    <section>
      <SearchBar setQuery={setQuery} />

      <h1 className="text-xl md:text-2xl pl-1 font-bold ">Movies & Tv</h1>
      <section className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 content-center justify-items-center ">
        {data?.map((q: MOVIE) => (
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
    </section>
  );
};

export default SearchPage;
