import "./index.css";

interface props {
  id?: number;
  img?: string;
  title?: string;
  release_date?: string;
  runtime?: number;
  genre?: string;
  language?: string;
  voteAverage?: number;
  overview?: string;
}

//function MovieCardDetail({img, title, releaseDate, runtime, genre, language, voteAverage, overview} : props){

function MovieCardDetail({
  img,
  title,
  release_date,
  runtime,
  genre,
  language,
  voteAverage,
  overview,
}: props) {
  return (
    <div className="containerMovieCardDetail">
      <div className="movieCardDetail">
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="image film"
        ></img>

        <div className="movieDetail">
          <h3 className="movieTitleDetail">{title}</h3>
          <p className="movieInfoDetail">
            {release_date} | {runtime} |{genre}
          </p>
          <p>{language}</p>

          <div className="movieVotesDetail">
            <h4>Rating by viewrs</h4>
            <p>{voteAverage}</p>
          </div>

          <p className="movieOverviewDetail">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCardDetail;
