"use client";
import { imgUrl } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Swiper, SwiperSlide } from "swiper/react";

const SeasonEpisodes = ({ data }: { data: TVSHOW }) => {
  const [SeasonNum, setSeasonNum] = useState<string | null | number>();
  const getValue = (value: string) => {
    setSeasonNum(value);
  };
  const Fetcher = async () => {
    const res = await fetch(`/api/season?id=${data.id}&season=${SeasonNum}`);
    return await res.json();
  };

  useEffect(() => {
    Fetcher();
  }, [SeasonNum , Fetcher]);

  const { data: Epi } = useSWR("api/season", () => Fetcher(), {
    fallbackData: `/api/season?id=${data.id}&season=1`,
    refreshInterval:(()=>500),
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-y-3">
        <h2 className="text-2xl">Episodes</h2>
        <Select onValueChange={(value) => getValue(value)}>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent>
            {data?.seasons.map((season) => (
              <SelectItem
                key={season.id}
                value={JSON.stringify(season.season_number)}
              >
                {season?.season_number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
