import { ApiReturnType, MovieProps } from "../types";
import baseMoviesApi from "./baseMoviesApi";

const editMovieApi = async ({data}: {data:MovieProps}): ApiReturnType => {

  try {
    const response = await baseMoviesApi.put(`/movies/${data.id}`,data);
    return [response.data, null];
  } catch (error) { 
    return [null, error as Error];
  }
};

export default editMovieApi;
