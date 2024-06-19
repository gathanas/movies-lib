import { useState } from "react";
import { ApiState, MovieProps } from "../types";
import { STATE_ERROR, STATE_IDLE, STATE_LOADING } from "../variables";
import editMovieApi from "../apis/editMovieApi";

const useMovieEdit = () => {
  const [apiState, setApiState] = useState<ApiState>(STATE_IDLE);

  const editMovie = async (movie: MovieProps) => {
    setApiState(STATE_LOADING);

    const [, error] = await editMovieApi(movie);
    if (error) {
      setApiState(STATE_ERROR);
      return;
    }
    setApiState(STATE_IDLE);
  };

  return { apiState, editMovie };
};

export default useMovieEdit;
