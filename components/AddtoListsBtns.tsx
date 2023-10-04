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
  const toast = useToast();
  const supabase = useSupabase();
  const { user } = useAuth();

  const onAddToList = () => {
    addToFav(supabase, poster, movieid, name, user?.id, media_type);
    toast.toast({
      title: `${name} add to favroites`,
    });
  };
  const onAddToWatched = () => {
    addToWatched(supabase, poster, movieid, name, user?.id, media_type);
    toast.toast({
      title: `${name} add to Watched list`,
    });
  };

  return (
    <div className="flex items-center justify-start gap-2">
      <Button
        onClick={onAddToWatched}
        variant={"default"}
        className="md:px-2 md:py-1 rounded-sm font-bold shadow-md bg-background text-white hover:bg-background/70"
      >
        Watched
        <CheckCircle2 className="ml-1" size={20} />
      </Button>
      <Button
        onClick={onAddToList}
        variant={"destructive"}
        className="md:px-2 md:py-1  rounded-sm font-bold shadow-md"
      >
        <PlusCircle className="ml-1" size={20} />
        Add to List
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
