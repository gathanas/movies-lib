import { useEffect, useState } from "react";
import { ApiState, MovieProps } from "../types";
import { STATE_ERROR, STATE_IDLE, STATE_LOADING } from "../variables";
import getMoviesApi from "../apis/getMoviesApi";

const useMoviesList = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [apiState, setApiState] = useState<ApiState>(STATE_LOADING);

  const getData = async () => {
    setApiState(STATE_LOADING);
    try {
      const response = await getMoviesApi();
      setMovies(response.data);
      setApiState(STATE_IDLE);
    } catch (error) {
      setApiState(STATE_ERROR);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { movies, apiState };
};

export default useMoviesList;
