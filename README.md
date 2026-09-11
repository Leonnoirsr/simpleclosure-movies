# SimpleCinema

A Next.js app that loads movies from [The Movie Database](https://developer.themoviedb.org/docs/getting-started) `GET /discover/movie` and shows them in a responsive card grid.

## What I chose

- **Filter (on the API request):** `primary_release_year` (default `2023`)
- **Sort:** TMDB `sort_by` (default `popularity.desc`)
- **Cards:** poster, title, release year, hover lift
- **Extra:** Year and sort controls on the home page (GET form → query string → `/api/movies`)

Changing sort asks TMDB for a new page of results (for example most popular vs highest rated), not a reshuffle of the same 20 titles.

## Setup

    npm i

Copy `.env.example` to `.env.local` and set the key to the provided API key:

    TMDB_SC_API_KEY=your_key_here

The variable must stay server-side (no `NEXT_PUBLIC_` prefix).

## Run

Development:

    npm run dev

Open http://localhost:3000

This is a Next.js app. `npm start` serves a production build, so it only works after:

    npm run build
    npm start

## Layout

- `app/api/movies/route.ts` — BFF route; API key, discover URL, year/sort query params
- `app/lib/tmdb.ts` — maps TMDB payloads into the shape the UI uses
- `app/page.tsx` — server page: reads `searchParams`, fetches `/api/movies`, renders the grid
- `components/` — `MovieGrid` and `MovieCard`
