import { SupabaseClient } from "@supabase/supabase-js";
// const toast = useToast();
export const addToWatched = async (
  Client: SupabaseClient,
  poster: string | undefined |null,
  movieId: string | null | null,
  name: string | null | undefined,
  userId: string | null |undefined,
  type: string | null | undefined
) => {
  const { error } = await Client.from("watched")
    .insert({
      movie_id: movieId,
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
