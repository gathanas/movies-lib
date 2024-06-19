import { useParams } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import PageWrapper from "../layout/PageWrapper";
import DeleteMovieButton from "../buttons/DeleteMovieButton";
import { STATE_ERROR, STATE_LOADING } from "../../variables";
import EditMovieButton from "../buttons/EditMovieButton";

const MovieDetailsScreen: React.FC = () => {
  const { id } = useParams();

  const { movie, apiState } = useMovieDetails(id);

  if (apiState === STATE_LOADING) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  if (apiState === STATE_ERROR) {
    return <PageWrapper>Error</PageWrapper>;
  }

  return (
    <PageWrapper>
      <h1>Movie Details</h1>
      <div className="movie-details">
        <img src={movie?.images[0]} />
        <div>
          <h2>{movie?.title}</h2>
          <p>{movie?.description}</p>
          <span className="movie-date">
            {movie?.release_date}
          </span>
        </div>
        <div className="controls">
          <DeleteMovieButton id={movie?.id?.toString()} />
          <EditMovieButton id={movie?.id?.toString()} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default MovieDetailsScreen;
