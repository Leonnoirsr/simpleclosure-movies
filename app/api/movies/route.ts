import { NextResponse } from "next/server";

const TMDB_DISCOVER = "https://api.themoviedb.org/3/discover/movie";

export async function GET(request: Request) {
  const incoming = new URL(request.url);
  const year = incoming.searchParams.get("year") ?? "2023";
  const sort = incoming.searchParams.get("sort") ?? "popularity.desc";

  const url = new URL(TMDB_DISCOVER);

  url.searchParams.set("api_key", process.env.TMDB_SC_API_KEY ?? "");
  url.searchParams.set("primary_release_year", year);
  url.searchParams.set("sort_by", sort);

  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Upstream request failed" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
