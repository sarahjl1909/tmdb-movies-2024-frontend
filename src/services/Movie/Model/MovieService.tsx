import { GET } from "../../Service";
import { MovieDTO } from "./MovieModel";

export const movieGET = async () => {
  try {
    const data: MovieDTO = await GET("movies?page=1&per_page=30");
    return data;
  } catch (error) {
    return error;
  }
};
