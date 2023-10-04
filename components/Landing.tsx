import React from "react";
import AddtoListsBtns from "./AddtoListsBtns";
import Image from "next/image";
import { imgUrl } from "@/constants";

interface LandingProp {
  data: MOVIE;
}
const Landing = ({ data }: LandingProp) => {
  return (
    <section className="flex flex-col pb-10 h-[65vh] justify-end">
      <div className="absolute -z-10 top-0 left-0 h-[80vh] w-full opacity-70">
        <Image
          alt="img"
          className="object-cover"
          fill
          sizes="100vw,100vh"
          priority
          src={imgUrl + data?.poster_path || imgUrl + data?.backdrop_path}
        />
      </div>
      <div className="flex flex-col md:items-start items-center justify-center gap-2">
        <h1 className="text-2xl md:text-4xl font-extrabold lg:text-7xl uppercase">
          {data?.original_title || data?.title || data?.name}
        </h1>
        <p className="max-w-xs text-center md:text-left text-sm md:max-w-lg lg:max-w-2xl lg:text-lg">
          {data?.overview}
        </p>
        <AddtoListsBtns
          movieid={JSON.stringify(data?.id)}
          poster={data?.poster_path}
          name={data?.name}
          media_type="tv"
        />
      </div>
    </section>
  );
};

export default Landing;
