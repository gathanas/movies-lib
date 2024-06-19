import { useNavigate } from "react-router-dom";
import useMoviesList from "../../hooks/useMoviesList";
import { STATE_ERROR, STATE_IDLE, STATE_LOADING } from "../../variables";
import MoviesAppButton from "../buttons/MainButton";
import CenteredElement from "../layout/CeneteredElement";
import PageWrapper from "../layout/PageWrapper";
import MovieItemSkeleton from "../loaders/MovieItemSkeleton";
import MovieItem from "../movie/MovieItem";
import { Typography } from "@mui/material";

const MoviesList = () => {
  const { movies, apiState } = useMoviesList();
  const navigate = useNavigate();
  if (apiState === STATE_LOADING) {
    return (
      <PageWrapper>
        <div className="movies-list">
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
        </div>
      </PageWrapper>
    );
  }

  if (apiState === STATE_ERROR) {
    return (
      <CenteredElement>
        <Typography variant="h5">An Error Has Occured</Typography>
      </CenteredElement>
    );
  }

  const onClick = () => {
    navigate("/movies/create");
  };

  if (apiState === STATE_IDLE && movies.length === 0) {
    return (
      <CenteredElement>
        <div style={{textAlign:'center'}}>
          <Typography marginBottom={'1rem'} variant="h4">No Movies Found</Typography>
          <MoviesAppButton style={{width:'130px'}} onClick={onClick}>Add New</MoviesAppButton>
        </div>
      </CenteredElement>
    );
  }

  return (
    <PageWrapper>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default MoviesList;
