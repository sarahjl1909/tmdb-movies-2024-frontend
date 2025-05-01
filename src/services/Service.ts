import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const GET = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
