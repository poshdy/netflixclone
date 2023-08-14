import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imgUrl } from "@/constants";

interface IPoster {
  id?: number | string;
  poster_path: string;
  width: number;
  height: number;
  backdrop_path?: string;
}
const Poster = ({ id, poster_path, height, width, backdrop_path }: IPoster) => {
  return (
    <Link href={`/movies/${id}`}>
      <Image
        width={width}
        height={height}
        src={imgUrl + poster_path || imgUrl + backdrop_path}
        alt="poster"
      />
    </Link>
  );
};

export default Poster;
