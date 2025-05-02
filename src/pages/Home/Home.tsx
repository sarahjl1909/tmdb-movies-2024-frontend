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
  const [page, setPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<boolean>(true);
  const [backPage, setBackPage] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, [page]);

  const increasePage = () => {
    if (data?.total_pages != page) {
      setPage(page + 1);
    }
  };
  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getData = async () => {
    try {
      const response: any = await movieGET(page);
      setData(response);
      setPage(response.page);

      setNextPage(true);
      setBackPage(true);

      if (response?.next_page_url === null) {
        setNextPage(false);
      }

      if (response?.previous_page_url === null) {
        setBackPage(false);
      }
      console.log(nextPage);
      console.log(backPage);
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
        {backPage ? (
          <div className="btn" onClick={decreasePage}>
            <IoIosArrowRoundBack className="arrowBack" size={80} />
          </div>
        ) : (
          <></>
        )}
        <div className="number">{data?.page}</div>
        {nextPage ? (
          <div className="btn" onClick={increasePage}>
            <IoIosArrowRoundForward className="arrow" size={80} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
