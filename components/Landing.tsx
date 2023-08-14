"use client";
import React, { useEffect, useState } from "react";
import AddtoListsBtns from "./AddtoListsBtns";
import Image from "next/image";
import { imgUrl } from "@/constants";

interface LandingProp {
  data: MOVIE[];
}
const Landing = ({ data }: LandingProp) => {
  const [movie, setMovie] = useState<MOVIE | null>(null);
  useEffect(() => {
    setMovie(data[Math.floor(Math.random() * data.length)]);
  }, [data]);
  return (
    <section className="flex flex-col pb-10 h-[65vh] justify-end ">
      <div className="absolute -z-10 top-0 left-0 h-[90vh] w-full opacity-70">
        <Image
          alt="img"
          className="object-cover"
          fill
          priority
          src={imgUrl + movie?.poster_path || imgUrl + movie?.backdrop_path}
        />
      </div>
      <div className="">
        <h1 className="text-2xl md:text-4xl font-extrabold lg:text-7xl uppercase">
          {movie?.original_title || movie?.title || movie?.name}
        </h1>
        <p className=" max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-2xl py-1">
          {movie?.overview}
        </p>
        <AddtoListsBtns
          movieid={JSON.stringify(movie?.id)}
          poster={movie?.poster_path}
          name={movie?.name}
          media_type="tv"
        />
      </div>
    </section>
  );
};

export default Landing;
