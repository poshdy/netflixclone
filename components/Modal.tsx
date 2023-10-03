"use client";
import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { useMovieModal } from "@/hooks/use-movie-modal";
import Image from "next/image";
import { imgUrl } from "@/constants";
import AddtoListsBtns from "./AddtoListsBtns";

type Props = {};

const Modal = (props: Props) => {
  const { isOpen, onClose, data } = useMovieModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" w-full ">
        <div className="relative w-full h-[50vh]">
          <Image
            fill
            alt="poster"
            sizes="100vw, 50vh"
            className="object-cover"
            src={imgUrl + data?.poster_path || imgUrl + data?.backdrop_path}
          />
        </div>
        <h2 className="text-2xl font-bold">{data?.title || data?.name}</h2>
        <p className="text-sm text-gray-400">{data?.overview}</p>
        <AddtoListsBtns
          isModal
          name={data?.title || data?.name}
          movieid={JSON.stringify(data?.id)}
          poster={data?.poster_path}
          media_type={data?.name ? "tv" : "movie"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
