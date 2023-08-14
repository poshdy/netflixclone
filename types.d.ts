interface MOVIE {
  first_air_date: string;
  name: string;
  adult: false;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genres?: { id: number; name: string }[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MOVIEDATA {
  adult: false;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number | string;
  } | null;
  id: number | string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genres: {
    id: number;
    name: string;
  }[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
}
interface ACTOR {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
interface TVSHOW {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  first_air_date: string;
  genres: Genres[];
  id: number;
  last_air_date: string;
  name: string;
  media_type: string;
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  overview: string;
  seasons:Seasons[]
  popularity: number;
  poster_path: string;
  vote_average: number;
}
interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number | string;
  vote_average: number;
}

interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
interface Genres {
  id: number;
  name: string;
}
interface Networks {
  id: number;
  logo_path: string;
  name: string;
  origin_country?: string;
}
interface EPISODE {
  air_date: number;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_cod: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
[];

// interface Videos {
//   id: number;
//   results: {
//     iso_639_1: string;
//     iso_3166_1: string;
//     name: string;
//     key: string;
//     site: string;
//     size: number;
//     type: string;
//     official: boolean;
//     published_at: string;
//     id: string;
//   }[];
// }
