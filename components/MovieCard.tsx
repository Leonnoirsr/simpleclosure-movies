import styles from "./MovieCard.module.css";

interface MovieCardProps {
  title: string;
  year: string | null;
  poster?: string | null;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className={styles.cardContainer}>
      {props.poster && (
        <img className={styles.poster} src={props.poster} alt={props.title} />
      )}
      <div className={styles.title}>{props.title}</div>
      <div className={styles.year}>{props.year}</div>
    </div>
  );
};

export default MovieCard;
