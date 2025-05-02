import axios from "axios";
import { movieDetailDTO } from "./MovieDetailDTO";

export const movieDetailGET = async (id: number) => {
  try {
    const data = await axios.get(`http://localhost:5000/detail/${id}`);
    console.log(data);
    const result: movieDetailDTO = data.data;

    return result;
  } catch (error) {
    return error;
  }
};
