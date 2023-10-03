import { imgUrl } from "@/constants";
import { createClient } from "@/lib/supabase-server";
import Image from "next/image";
import React from "react";

const Profilepage = async () => {
  const supabase = createClient();

  const { data: Favs } = await supabase.from("favorites").select();

  return (
    <section className="space-y-5 my-10">
      <h1 className="font-bold text-lg md:text-2xl text-center md:text-left">
        My List
      </h1>
      <div className="w-full flex flex-col items-center justify-center gap-2  md:flex-row md:flex-wrap ">
        {Favs?.map((favs) => (
          <div
            key={favs.movie_id}
            className="relative w-[200px] h-[300px] md:w-[250px] md:h-[350px]"
          >
            <Image
              className="rounded-md object-cover shadow-md"
              priority
              fill
              sizes="(max-width: 300px) 100vw, (max-width: 400px) 50vw, 33vw"
              src={imgUrl + favs.poster}
              alt="movie"
            />
            div{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profilepage;
