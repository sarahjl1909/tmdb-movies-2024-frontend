import "./index.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { movieGET } from "../../services/Movie/Model/MovieService";
import { MovieDTO } from "../../services/Movie/Model/MovieModel";

const Home = () => {
  const [data, setData] = useState<MovieDTO>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response: any = await movieGET();
      setData(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerHome">
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerMovieCard">
        <MovieCard img={data?.data[0].image_url} />
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
