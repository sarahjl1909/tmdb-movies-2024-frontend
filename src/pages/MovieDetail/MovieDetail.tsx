import "./index.css";
import MovieCardDetail from "../../components/MovieCardDetail/MovieCardDetail";
import MovieCard from "../../components/MovieCard/MovieCard";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  return (
    <div>
      <Link to="/" className="link">
        <IoIosArrowRoundBack className="arrowBack" size={50} color="black" />
      </Link>
      <MovieCardDetail />
    </div>
  );
};

export default MovieDetail;
