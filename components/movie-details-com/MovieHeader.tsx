import React from "react";
import Image from "next/image";
import { imgUrl } from "@/constants";
import MovieTitle from "./MovieTitle";

const MovieHeader = async (data: MOVIEDATA) => {
  return (
    <section className="flex flex-col h-[65vh] pb-10 justify-end ">
      <div className="absolute  -z-50 w-screen h-[100vh] left-0 top-0 opacity-90">
        <Image
          src={imgUrl + data.poster_path}
          alt="poster"
          priority
          className="object-cover"
          fill
          sizes="100vw , 100vh"
        />
      </div>
      <div className="h-screen w-[90%] absolute top-0 left-0 bg -z-40 -gradient-to-r from-black to-transparent flex flex-col items-center justify-center" />
      <MovieTitle {...data} />
    </section>
  );
};

export default MovieHeader;
