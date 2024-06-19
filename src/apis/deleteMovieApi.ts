import { ApiReturnType } from "../types";
import baseMoviesApi from "./baseMoviesApi";

const deleteMovieApi = async (id: string): ApiReturnType => {
  try {
    const response = await baseMoviesApi.delete(`/movies/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, error as Error];
  }
};

export default deleteMovieApi;
