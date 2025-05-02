import { GET } from "../Service";
import { searchDTO } from "./Model/SearchDTO";

export const searchGET = async (title: string) => {
  try {
    const data: searchDTO[] = await GET(`search/${title}`);
    return data;
  } catch (error) {
    return error;
  }
};
