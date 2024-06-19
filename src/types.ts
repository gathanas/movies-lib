import { AxiosResponse } from "axios";
import { STATE_ERROR, STATE_IDLE, STATE_LOADING, STATE_SUCCESS } from "./variables";

export type MovieProps = {
  id: number;
  title: string;
  description: string;
  release_date: string;
  images: string[];
};

export type ApiState =
  | typeof STATE_IDLE
  | typeof STATE_LOADING
  | typeof STATE_ERROR 
  | typeof STATE_SUCCESS;

export type Theme = "light" | "dark";

export type ApiReturnType<D = any> = Promise<[AxiosResponse<D,any> | null, Error | null]>

export type MovieStateNew = Omit<MovieProps, "id" | "images"> & { images: File[] };
export type MovieStateEdit = Omit<MovieProps, "images"> & { images: File[] };

export type MovieState = MovieStateNew | MovieStateEdit;