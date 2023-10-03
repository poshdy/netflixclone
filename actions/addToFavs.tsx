import { useToast } from "@/components/ui/use-toast";
import { SupabaseClient } from "@supabase/supabase-js";
// const toast = useToast();
export const addToFav = async (
  Client: SupabaseClient,
  poster: string | null,
  movie_id: string | null,
  name: string | null,
  userId: string| undefined | null,
  type: string | null
) => {
  const { error } = await Client.from("favorites")
    .insert({
      movie_id,
      name: name,
      poster: poster,
      user_id: userId,
      type,
    })
    .select();
  //   toast.toast({
  //     title: `${name} add to favroites`,
  //   });
  if (error) {
    console.log(error.details);
  }
};
