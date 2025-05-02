import "./index.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { movieGET } from "../../services/Movie/Model/MovieService";
import { MovieDTO } from "../../services/Movie/Model/MovieDTO";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  const [data, setData] = useState<MovieDTO>();

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const getData = async () => {
    try {
      const response: any = await movieGET();
      setData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const showMoreDetails = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="containerHome">
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerMovieCard">
        {data?.data.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            onClick={() => showMoreDetails(movie.id)}
          />
        ))}
      </div>
      <div className="containerPagination">
        <div className="btn">
          <IoIosArrowRoundBack className="arrowBack" size={80} color="black" />
        </div>
        <div className="number">5</div>
        <div className="btn">
          <IoIosArrowRoundForward className="arrow" size={80} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Home;
