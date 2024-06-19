import { useState } from "react";
import { ApiState } from "../types";
import { STATE_ERROR, STATE_IDLE } from "../variables";
import deleteMovieApi from "../apis/deleteMovieApi";


const useMovieDelete = () => {
  const [apiState, setApiState] = useState<ApiState>(STATE_IDLE);

  const deleteMovie = async (id: string):Promise<boolean> => {
    if (!id) {
      setApiState(STATE_ERROR);
      return false;
    }

    const [, error] = await deleteMovieApi(id);
    if (error) {
      setApiState(STATE_ERROR);
      return false;
    }
    setApiState(STATE_IDLE);
    return true
    
  };

  return { apiState, deleteMovie };
};

export default useMovieDelete;
