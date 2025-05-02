import { GET } from "../../Service";
import { MovieDTO } from "./MovieDTO";

export const movieGET = async (pageNumber: number) => {
  try {
    const data: MovieDTO = await GET(`movies?page=${pageNumber}&per_page=30`);
    return data;
  } catch (error) {
    return error;
  }
};
