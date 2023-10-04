import React from "react";
import Image from "next/image";
import { imgUrl } from "@/constants";
import TvTitle from "./TvTitle";

const TvHeader = (data: TVSHOW) => {
  return (
    <section className="flex flex-col h-[65vh] pb-10 justify-end ">
      <div className="absolute -z-50 w-screen h-[100vh] left-0 top-0 ">
        <Image
          src={imgUrl + data.poster_path}
          alt="poster"
          priority
          className="object-cover"
          fill
          sizes="100vw , 100vh"
        />
      </div>
      {/* <div className="h-screen w-[90%] md:w-[60%] absolute -z-10 left-0 top-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col items-center justify-center"> */}
        <TvTitle {...data} />
      {/* </div> */}
    </section>
  );
};

export default TvHeader;
