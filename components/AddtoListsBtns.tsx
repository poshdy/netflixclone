"use client";
import React from "react";
import { CheckCircle2, InfoIcon, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useSupabase } from "./Providers/supabase-provider";
import { useToast } from "./ui/use-toast";
import { useAuth } from "./Providers/supabase-auth-provider";
import Link from "next/link";
import { addToFav } from "@/actions/addToFavs";
import { addToWatched } from "@/actions/addToWatched";
interface Iprops {
  movieid: string | null;
  poster: string | undefined | undefined;
  name: string | null | undefined;
  media_type: string | null | undefined;
  isModal?: boolean;
}
const AddtoListsBtns = ({
  movieid,
  name,
  poster,
  media_type,
  isModal,
}: Iprops) => {
  // const toast = useToast();
  const supabase = useSupabase();
  const { user } = useAuth();

  return (
    <div className="w-full flex flex-col  items-center gap-1 md:flex-row ">
      <Button
        onClick={() =>
          addToWatched(supabase, poster, movieid, name, user?.id, media_type)
        }
        size="icon"
        className=" w-full md:w-fit font-bold mx-1 border-2 rounded-3xl hover:rounded-md transition-all"
      >
        Watched
        <CheckCircle2 className="ml-1" size={20} />
      </Button>
      <Button
        onClick={() =>
          addToFav(supabase, poster, movieid, name, user?.id, media_type)
        }
        size="sm"
        variant={"outline"}
        className=" font-bold mx-1 rounded-full w-full md:w-fit "
      >
        My List
        <PlusCircle className="ml-1" size={20} />
      </Button>
      {isModal && (
        <Link
          href={
            media_type === "tv" ? `tvshows/${movieid}` : `movies/${movieid}`
          }
          className=" font-bold mx-1 rounded-full w-full flex items-center md:w-fit "
        >
          More info
          <InfoIcon className="ml-1" size={20} />
        </Link>
      )}
    </div>
  );
};

export default AddtoListsBtns;
