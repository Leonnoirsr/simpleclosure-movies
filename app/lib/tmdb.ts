export type Movie = {
  id: number;
  title: string;
  posterURL: string | null;
  year: string | null;
  rating: number;
};

type TmdbMovie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
  vote_average: number;
};


const IMG = 'https://image.tmdb.org/t/p/w500';

export function toMovie(raw: TmdbMovie): Movie {
  return {

    id: raw.id,
    title: raw.title,
    posterURL: raw.poster_path ? `${IMG}${raw.poster_path}` : null,
    year: raw.release_date ? raw.release_date.slice(0, 4) : null,
    rating: raw.vote_average,

  }
}