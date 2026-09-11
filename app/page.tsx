import MovieGrid               from "../components/MovieGrid";
import { toMovie, type Movie } from "./lib/tmdb";

async function getMovies(year: string, sort: string): Promise<Movie[]> {
  const url = new URL("http://localhost:3000/api/movies");

  url.searchParams.set("year", year);
  url.searchParams.set("sort", sort);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load movies");
  }

  const data = await res.json();
  return data.results.map(toMovie);
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ year?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const year = params.year ?? "2023";
  const sort = params.sort ?? "popularity.desc";

  const sortDictionary: Record<string, string> = {
    'popularity.desc': 'Popular',
    'vote_average.desc': 'Top Rated',
    'primary_release_date.desc': 'Newest'
  }

  const sortLabel = sortDictionary[sort] ?? 'Popular'

  const movies = await getMovies(year, sort);

  return (
    <main className="mx-auto max-w-7xl p-10 w-full">
      <img
        className="mb-4 h-16 w-80 object-cover object-center"
        src="/simple-cinema.svg"
        alt="SimpleCinema"
      />
      <form className="flex flex-wrap gap-4 mb-8 items-end" method="get">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-500" htmlFor="year">
            Year
          </label>
          <select
            className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900"
            id="year"
            name="year"
            defaultValue={year}
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className="flex flex-col grap-1">
          <label className="text-s font-medium text-neutral-500" htmlFor="sort">
            Sort
          </label>
          <select
            className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900"
            id="sort"
            name="sort"
            defaultValue={sort}
          >
            <option value="popularity.desc">Popularity</option>
            <option value="vote_average.desc">Rating</option>
            <option value="primary_release_date.desc">Release Date</option>
          </select>
        </div>

        <button className="rounded-md bg-neutral-700 px-4 py-2 text-sm text-white hover:bg-neutral-800" type="submit">Apply</button>
      </form>
      <h1 className="font-medium text-neutral-500 mb-5">{sortLabel} In {year}</h1>
      <MovieGrid movies={movies} />
    </main>
  );
}
