import "./index.css";
import MovieCardDetail from "../../components/MovieCardDetail/MovieCardDetail";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetailGET } from "../../services/MovieDetail/Model/MovieDetailService";
import { movieDetailDTO } from "../../services/MovieDetail/Model/MovieDetailDTO";

const MovieDetail = () => {
  const [data, setData] = useState<movieDetailDTO>();

  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    getData(id);
    console.log(data);
  }, [id]);

  const getData = async (id: any) => {
    try {
      const response: any = await movieDetailGET(id);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/" className="link">
        <IoIosArrowRoundBack className="arrowBack" size={50} />
      </Link>

      <MovieCardDetail
        id={data?.id}
        img={data?.poster_path}
        title={data?.title}
        genre={data?.genres}
        language={data?.original_language}
        voteAverage={data?.vote_average}
        release_date={data?.release_date}
        runtime={data?.runtime}
        overview={data?.overview}
      />
    </div>
  );
};

export default MovieDetail;
