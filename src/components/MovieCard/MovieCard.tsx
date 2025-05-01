import { Link } from "react-router-dom";
import "./index.css";

interface props {
  img?: string;
  title?: string;
  releaseDate?: string;
  runtime?: string;
  genre?: string;
  language?: string;
  voteAverage?: number;
  overview?: string;
}

//function MovieCardDetail({img, title, releaseDate, runtime, genre, language, voteAverage, overview} : props){

function MovieCard({
  img,
  genre,
  language,
  overview,
  releaseDate,
  runtime,
  title,
  voteAverage,
}: props) {
  const imga: string =
    "https://image.tmdb.org/t/p/w185/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg";

  return (
    <div className="movieCard">
      <Link to={`/movies`}>
        {img ? (
          <img src={img} alt="image film"></img>
        ) : (
          <img src={imga} alt="image film"></img>
        )}
      </Link>

      <h4 className="movieTitle">Title of the movie</h4>
      <div className="movieVotes">
        <h5>Rating by viewrs</h5>
      </div>
    </div>
  );
}

export default MovieCard;
