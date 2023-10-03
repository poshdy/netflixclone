"use client";
import React, { useState } from "react";
import { imgUrl } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import Landing from "@/components/Landing";
import Image from "next/image";

import { useMovieModal } from "@/hooks/use-movie-modal";
import SelectGenre from "@/components/SelectGenre";
import { Button } from "@/components/ui/button";

const Moviespage = () => {
  const [page, setPage] = useState(1);
  const { onOpen } = useMovieModal();
  const [genreId, setGenre] = useState<string>("28");
  const fetcher = async (genre: string, page: number) => {
    const res = await fetch(`/api/movies?genreId=${genreId}&page=${page}`);
    return res.json();
  };
  const { data } = useQuery({
    queryKey: ["movies-page", genreId, page],
    queryFn: () => fetcher(genreId, page),
    suspense: true,
    keepPreviousData: true,
  });

  return (
    <section className="space-y-16">
      <Landing data={data?.slice(0, 3)} />

      <section className=" flex flex-col gap-2 items-center container my-2">
        <SelectGenre setGenre={setGenre} />
        <div className="flex flex-wrap justify-center items-center gap-4">
          {data?.map((movie: MOVIEDATA) => (
            <div
              onClick={() => onOpen(movie)}
              key={movie.id}
              className="relative w-48 h-60"
            >
              <Image
                className="rounded-md object-cover"
                fill
                sizes="100vw , 100vh"
                alt={movie?.title}
                src={imgUrl + movie?.poster_path}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <Button
            variant={"ghost"}
            className="w-full"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </Button>
          <Button
            variant={"outline"}
            className="w-full"
            disabled={page >= 4}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Moviespage;
