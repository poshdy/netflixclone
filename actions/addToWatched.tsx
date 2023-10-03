import { SupabaseClient } from "@supabase/supabase-js";
// const toast = useToast();
export const addToWatched = async (
  Client: SupabaseClient,
  poster: string | undefined,
  movieId: string | undefined,
  name: string | undefined,
  userId: string | undefined,
  type: string | undefined
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
