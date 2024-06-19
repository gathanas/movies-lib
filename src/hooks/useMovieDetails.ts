import { useEffect, useState } from "react";
import { ApiState, MovieState } from "../types";
import { STATE_ERROR, STATE_IDLE, STATE_LOADING, STATE_SUCCESS } from "../variables";
import getMoviewDetailsApi from "../apis/getMovieDetailsApi";

type MovieReturnWithData = {
    apiState: Omit<ApiState,typeof STATE_IDLE>;
    movie: null,
    fetchMovie: any
}


type MovieReturn = {
    apiState: typeof STATE_IDLE;
    movie: MovieState,
    fetchMovie: any
}

type MovieDetailsReturn = MovieReturn | MovieReturnWithData

const useMovieDetails = (id?: string):MovieDetailsReturn => {
  const [movie, setMovie] = useState<MovieState | null>(null);

  const [apiState, setApiState] = useState<ApiState>(STATE_LOADING);

  const fetchMovie = async () => {
    if (!id) {
      setApiState(STATE_ERROR);
      return;
    }

    const [response, error] = await getMoviewDetailsApi({ id });
    if (error || !response) {
      setApiState(STATE_ERROR);
      return;
    }
    setMovie(response.data);
    setApiState(STATE_SUCCESS);
  };

  useEffect(() => {
    if (id) {
      fetchMovie();
    }
  }, [id]);

  return { movie, apiState, fetchMovie } as MovieDetailsReturn;
};

export default useMovieDetails;
