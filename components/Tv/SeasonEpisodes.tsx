"use client";
import { imgUrl } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";

const SeasonEpisodes = ({ data }: { data: TVSHOW }) => {
  const [SeasonNum, setSeasonNum] = useState<string>('');

  const Fetcher = async (num: string) => {
    const res = await fetch(`/api/season?id=${data.id}&season=${num}`);
    return await res.json();
  };

  const { data: Epi } = useQuery({
    queryKey: ["tv-season", SeasonNum],
    queryFn: () => Fetcher(SeasonNum),
    suspense: true,
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-y-3">
        <h2 className="text-2xl">Episodes</h2>
        <select onChange={(e) => setSeasonNum(JSON.stringify(e.target.value))}>
          {data?.seasons?.map((season) => (
            <option
              key={season.id}
              value={JSON.stringify(season.season_number)}
            >
              {season?.season_number}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {Epi?.episodes?.map((epi: EPISODE) => (
          <SwiperSlide className="max-h-[230px]" key={epi.id}>
            <Image
              src={imgUrl + epi?.still_path}
              width={180}
              height={220}
              alt={epi.name}
            />
            <p className="font-bold">{epi?.episode_number}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeasonEpisodes;
