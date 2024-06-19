import { CircularProgress } from "@mui/material";
import useMovieDelete from "../../hooks/useMovieDelete";
import { STATE_LOADING } from "../../variables";
import MainButton from "./MainButton";
import { useNavigate } from "react-router-dom";

const DeleteMovieButton = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  const navigate = useNavigate();

  const { deleteMovie, apiState } = useMovieDelete();

  if (!id) {
    return null;
  }

  const onClick = async () => {
    const isDeleted = await deleteMovie(id);
    if (isDeleted) {
      navigate("/");
    }
  };

  return (
    <MainButton className={className} onClick={onClick}>
      {apiState === STATE_LOADING ? <CircularProgress size="sm" /> : "Delete"}
    </MainButton>
  );
};

export default DeleteMovieButton;
