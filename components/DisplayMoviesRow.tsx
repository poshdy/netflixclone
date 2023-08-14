"use client";
import React from "react";
import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "@/constants";
import Link from "next/link";

interface DisplayProp {
  title: string;
  data: MOVIE[] | null;
}

const DisplayMoviesRow = ({ title, data }: DisplayProp) => {
  return (
    <section>
      <h3 className="font-bold text-lg md:text-2xl mb-2">{title}</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          640: {
            slidesPerView:6,
            spaceBetween: 15
          }
        }}
     
      >
        {data?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link  href={movie.first_air_date  ? `/tvshows/${movie.id}` : `/movies/${movie.id}`}>
            <Image
             className="rounded-xl hover:rounded-sm transition-all select-none"
              width={180}
              height={260}
              alt="img"
              src={imgUrl + movie.poster_path || imgUrl + movie.backdrop_path }
              />
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DisplayMoviesRow;
