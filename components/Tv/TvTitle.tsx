import { Calendar, Star } from "lucide-react";
import React from "react";
import AddtoListsBtns from "../AddtoListsBtns";
import Cast from "../movie-details-com/Cast";

const TvTitle = ({
  name,
  vote_average,
  first_air_date,
  number_of_episodes,
  number_of_seasons,
  created_by,
  last_air_date,
  genres,
  id,
  original_name,
  overview,
  poster_path,
}: TVSHOW) => {
  const Type = first_air_date ? "tv" : "movie";
  

  return (
    <section className="w-[80%] flex flex-col items-start space-y-2 ">
      <h1 className="text-2xl md:text-3xl font-extrabold lg:text-5xl  uppercase">
        {name || original_name}
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
          {first_air_date.slice(0, 4)}
          <Calendar className="ml-1" size={15} />
        </p>
        <p className="text-sm text-secondary">{number_of_seasons} Seasons</p>
        <p className="text-sm text-secondary">{number_of_episodes} Episodes </p>
      </div>
      <p className="text-xs md:text-sm">{overview}</p>
      <Cast type="tv" id={id} />
     <p className=" text-sm text-secondary"><span className="font-bold"> Created by:</span> {created_by[0].name}</p>
      <AddtoListsBtns
        movieid={JSON.stringify(id)}
        name={name}
        poster={poster_path}
        media_type={Type}
      />
    </section>
  );
};

export default TvTitle;
