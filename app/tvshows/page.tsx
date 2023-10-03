"use client";
import React, { useState } from "react";
import { imgUrl } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import Landing from "@/components/Landing";
import Image from "next/image";
import { useMovieModal } from "@/hooks/use-movie-modal";
import { Button } from "@/components/ui/button";
import TvGenres from "@/components/Tv/TvGenres";

const Tvpage = () => {
  const [page, setPage] = useState(1);
  const { onOpen } = useMovieModal();
  const [genreId, setGenre] = useState<string>("10759");
  const fetcher = async (genre: string, page: number) => {
    const res = await fetch(`/api/tv?genreId=${genreId}&page=${page}`);
    return res.json();
  };
  const { data } = useQuery({
    queryKey: ["tv-page", genreId, page],
    queryFn: () => fetcher(genreId, page),
    suspense: true,
    keepPreviousData: true,
  });

  return (
    <section className="space-y-28">
      <Landing data={data?.slice(0, 3)} />

      <section className=" flex flex-col gap-2 items-center container">
        <TvGenres setGenre={setGenre} />
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
      </section>
      <section className="flex flex-col items-center gap-2 w-full ">
        <Button
        className="w-full"
          variant={"ghost"}
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
      </section>
    </section>
  );
};

export default Tvpage;
