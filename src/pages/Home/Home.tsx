import "./index.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerMovieCard">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Home;
