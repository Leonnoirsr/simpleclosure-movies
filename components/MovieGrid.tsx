import { Movie } from "@/app/lib/tmdb";
import styles    from "./MovieGrid.module.css";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = (props: MovieGridProps) => {
  return (
    <div className={styles.gridContainer}>
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          poster={movie.posterURL}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
