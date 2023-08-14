"use client";
import React from "react";
import { CheckCircle2, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useSupabase } from "./Providers/supabase-provider";
import { useToast } from "./ui/use-toast";
import { useAuth } from "./Providers/supabase-auth-provider";
interface Iprops {
  movieid:string | undefined
  poster:string | undefined
  name:string | undefined
  media_type:string
}
const AddtoListsBtns = ({movieid,name,poster,media_type}:Iprops) => {
  const toast = useToast()
  const supabase = useSupabase();
  const {user} = useAuth()
  const addToFav = async () => {
    const { error } = await supabase
      .from("favorites")
      .insert({ movie_id:movieid, name, poster ,user_id:user?.id,media_type}).select();
    toast.toast({
      title: `${name} add to favroites`
    })
    if(error){
      console.log(error.details)
    }
  };
  return (
    <div className="w-full flex flex-col  items-center gap-1 md:flex-row ">
      <Button
        size="sm"
        className=" w-full md:w-fit font-bold mx-1 border-2 rounded-3xl hover:rounded-md transition-all"
      >
        Watched
        <CheckCircle2 className="ml-1" size={20} />
      </Button>
      <Button
      onClick={addToFav}
        size="sm"
        variant={"outline"}
        className=" font-bold mx-1 rounded-full w-full md:w-fit "
      >
        My List
        <PlusCircle className="ml-1" size={20} />
      </Button>
    </div>
  );
};

export default AddtoListsBtns;
