import { AxiosResponse } from "axios";
import { MovieState } from "../types";
import baseMoviesApi from "./baseMoviesApi";

interface CreateMovieApiProps {
  data: MovieState;
}

type CreateMovieApi = (
  props: CreateMovieApiProps
) => Promise<[AxiosResponse<MovieState[], any> | null, Error | null]>;

const createMovieApi: CreateMovieApi = async ({ data }) => {

  try {
    const response = await baseMoviesApi.post<MovieState[]>("movies", data);
    return [response, null];
  } catch (error) {
    return [null, error as Error];
  }
};

export default createMovieApi;
