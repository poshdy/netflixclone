import { useToast } from "@/components/ui/use-toast";
import { SupabaseClient } from "@supabase/supabase-js";
// const toast = useToast();
export const addToFav = async (
  Client: SupabaseClient,
  poster: string | undefined,
  movie_id: string | undefined,
  name: string | undefined,
  userId: string | undefined,
  type: string | undefined
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
