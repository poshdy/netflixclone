import DisplayMoviesRow from "@/components/DisplayMoviesRow";
import MovieHeader from "@/components/movie-details-com/MovieHeader";
import { getCollection } from "@/fetchers/Details/Collection";
import { getSimilar } from "@/fetchers/Details/SimilarMovies";
import { getDetails } from "@/fetchers/Details/getDetails";
import React from "react";

const MovieDetailsPage = async ({
  params,
}: {
  params: { movieid: string | number };
}) => {
  const movieDetalis: MOVIEDATA = await getDetails(params.movieid, "movie");
  const isCollection =
    movieDetalis.belongs_to_collection && movieDetalis.belongs_to_collection.id;

  const [Similar] = await Promise.all([getSimilar(movieDetalis.id, "movie")]);
  const Collection =
    isCollection !== null || undefined
      ? await getCollection(JSON.stringify(isCollection))
      : null;

  return (
    <section className="space-y-10">
      <MovieHeader {...movieDetalis} />
      <div className="w-full bg-gradient-to-t from-black/50 to-transparent my-4 space-y-4">
        <DisplayMoviesRow title="More like this" data={Similar} />
        {isCollection && (
          <DisplayMoviesRow title="collection" data={Collection} />
        )}
      </div>
    </section>
  );
};

export default MovieDetailsPage;
