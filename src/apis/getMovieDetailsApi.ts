import { ApiReturnType, MovieState } from "../types";
import baseMoviesApi from "./baseMoviesApi";

type MovieDetailsApi = ({ id }: { id: string }) => ApiReturnType<MovieState>;

const getMoviewDetailsApi: MovieDetailsApi = async ({ id }) => {
  try {
    const r = await baseMoviesApi.get<MovieState>(`/movies/${id}`);
    return [r, null];
  } catch (e) {
    return [null, e as Error];
  }
};

export default getMoviewDetailsApi;
