import { GET } from "../../Service";
import { MovieDTO } from "./MovieModel";

export const movieGET = async () => {
  try {
    const data: MovieDTO = await GET("movies");
    return data;
  } catch (error) {
    return error;
  }
};
