import DisplayMoviesRow from "@/components/DisplayMoviesRow";
import SeasonEpisodes from "@/components/Tv/SeasonEpisodes";
import TvHeader from "@/components/Tv/TvHeader";
import { getSimilar } from "@/fetchers/Details/SimilarMovies";

import { getDetails } from "@/fetchers/Details/getDetails";
import React, { Suspense } from "react";

const TvDetailspage = async ({
  params,
}: {
  params: { showid: number | string };
}) => {
  const TvShow = await getDetails(params.showid, "tv");
  const Similar = await getSimilar(params.showid, "tv");

  return (
    <section className="space-y-10">
      <TvHeader {...TvShow} />

      <div className="w-full bg-gradient-to-t from-black/50 to-transparent">
        <SeasonEpisodes data={TvShow} />

        <DisplayMoviesRow title="More like this" data={Similar} />
      </div>
    </section>
  );
};

export default TvDetailspage;
