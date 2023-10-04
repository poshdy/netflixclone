import DisplayMoviesRow from "@/components/DisplayMoviesRow";
import Landing from "@/components/Landing";
import { getAction } from "@/fetchers/getActionMovies";
import { getComedy } from "@/fetchers/getComedy";
import { getCrime } from "@/fetchers/getCrime";
import { getDramas } from "@/fetchers/getDramas";
import { getFantasy } from "@/fetchers/getFantasy";
import { getHorror } from "@/fetchers/getHorror";
import { getNetflixOriginals } from "@/fetchers/getNetflixOriginals";
import { getTrendingMovies } from "@/fetchers/getTrendingMovies";
import { Suspense } from "react";
export default async function Home() {
  const [
    NetflixOriginal,
    Drama,
    Action,
    Fantasy,
    Crime,
    Comedy,
    Horror,
    Trending,
  ] = await Promise.all([
    getNetflixOriginals(),
    getDramas(),
    getAction(),
    getFantasy(),
    getCrime(),
    getComedy(),
    getHorror(),
    getTrendingMovies("all"),
  ]);
  return (
    <section className="space-y-10">
      <Landing data={NetflixOriginal?.at(0)} />
      <section className="flex flex-col gap-7 py-4 ">
        <Suspense fallback={<h1>Loadingg</h1>}>
          <DisplayMoviesRow data={NetflixOriginal} title="Netflix Originals" />
        </Suspense>
        <Suspense fallback={<h1>Loadingg</h1>}>
          <DisplayMoviesRow data={Trending} title="Trending Now" />
        </Suspense>
        <DisplayMoviesRow data={Drama} title="Drama" />
        <DisplayMoviesRow data={Horror} title="Horror" />
        <DisplayMoviesRow data={Action} title="Action" />
        <DisplayMoviesRow data={Crime} title="Crime" />
        <DisplayMoviesRow data={Comedy} title="Comedy" />
        <DisplayMoviesRow data={Fantasy} title="Fantasy" />
      </section>
    </section>
  );
}
