import { Movie } from "@mui/icons-material";
import { MovieProps } from "../../types";
import { useNavigate } from "react-router-dom";

type MovieItemProps = {
  movie: MovieProps;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const firstImage = movie.images[0];

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div onClick={onClick} className="movie-item">
      {firstImage ? (
        <img src={firstImage} />
      ) : (
        <div className="no-image">
          <Movie />
        </div>
      )}
      <span>{movie.title}</span>
    </div>
  );
};

export default MovieItem;
