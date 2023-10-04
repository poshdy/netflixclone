"use client";
import React from "react";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "@/constants";
import { useMovieModal } from "@/hooks/use-movie-modal";

interface DisplayProp {
  title: string;
  data: MOVIE[] | null;
}

const DisplayMoviesRow = ({ title, data }: DisplayProp) => {
  const { onOpen } = useMovieModal();
  return (
    <section>
      <h3 className="font-bold text-lg md:text-2xl mb-2">{title}</h3>

      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        {data?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-[160px] h-[260px] "
              onClick={() => onOpen(movie)}
            >
              <Image
                className="rounded-xl object-cover hover:rounded-sm transition-all select-none"
                alt={movie?.name || movie?.title}
                fill
                loading="lazy"
                sizes="100vw ,100vh"
                src={imgUrl + movie.poster_path || imgUrl + movie.backdrop_path}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DisplayMoviesRow;
