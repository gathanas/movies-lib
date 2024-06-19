import MainButton from "./MainButton";
import { useNavigate } from "react-router-dom";

const EditMovieButton = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/movies/edit?id=${id}`);
    }

  return (
    <MainButton className={className} onClick={onClick}>
      Edit
    </MainButton>
  );
};

export default EditMovieButton;
