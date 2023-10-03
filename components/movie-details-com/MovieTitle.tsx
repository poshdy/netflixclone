import React from "react";
import { Calendar, Clock1, Star } from "lucide-react";
import Cast from "./Cast";
import AddtoListsBtns from "../AddtoListsBtns";

const MovieTitle = ({
  original_title,
  release_date,
  runtime,
  vote_average,
  genres,
  id,
  overview,
  poster_path,
  media_type,
  title,
}: MOVIEDATA) => {
  return (
    <section className="w-[80%] flex flex-col items-start space-y-2 ">
      <h1 className="text-2xl md:text-3xl font-extrabold lg:text-5xl  uppercase">
        {original_title || title}
      </h1>
      <div className="flex items-center flex-wrap my-1 gap-2">
        {genres?.map((genre) => (
          <p
            className="text-secondary text-xs md:text-base font-bold"
            key={genre.id}
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <p className="text-sm text-secondary flex items-center justify-center">
          {vote_average.toFixed(1)} <Star className="ml-1" size={15} />
        </p>
        <p className="text-sm text-secondary flex items-center justify-center">
          {release_date.slice(0, 4)}
          <Calendar className="ml-1" size={15} />
        </p>
        <p className="text-sm text-secondary flex items-center justify-center">
          {runtime} <Clock1 className="ml-1" size={15} />
        </p>
      </div>
      <p className="text-xs md:text-sm">{overview}</p>
      <Cast type="movie" id={id} />
      <AddtoListsBtns
        movieid={JSON.stringify(id)}
        name={original_title}
        poster={poster_path}
        media_type="movie"
      />
    </section>
  );
};

export default MovieTitle;
