"use client";
import React from "react";
import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        {data?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className=" relative w-[160px] h-[260px] "
              onClick={() => onOpen(movie)}
            >
              <Image
                className="rounded-xl object-cover hover:rounded-sm transition-all select-none"
                alt={movie?.name || movie?.title}
                fill
                loading="lazy"
                sizes="(max-width: 70vw) , (max-height: 90vh) ,80vw ,100vh"
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
