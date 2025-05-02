import "./index.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { searchDTO } from "../../services/Search/Model/SearchDTO";
import { searchGET } from "../../services/Search/SearchService";
import { ImSearch } from "react-icons/im";

const SearchPage = () => {
  const [data, setData] = useState<searchDTO[]>();
  const [query, setQuery] = useState<string[]>();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    //getData();
  }, []);

  const getData = async (text: string) => {
    try {
      const response: any = await searchGET(text);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const showMoreDetails = (id: number) => {
    navigate(`/movies/${id}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="containerHome">
      <div className="containerSearch">
        <div className="searchBox">
          <input type="text" placeholder="Search" onChange={handleChange} />
          <div className="iconSearch" onClick={() => getData(text)}>
            <ImSearch className="searchIcon" />
          </div>
        </div>
      </div>

      {data && data.length > 0 ? (
        <>
          <div className="containerMovieCard">
            {data?.map((movie) => (
              <MovieCard
                key={movie.id}
                img={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                onClick={() => showMoreDetails(movie.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <h1>Filme não encontrado</h1>
      )}
    </div>
  );
};

export default SearchPage;
