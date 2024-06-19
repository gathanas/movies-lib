import { Skeleton } from "@mui/material";
import MovieItem from "../movie/MovieItem";

const MovieItemSkeleton = () => {
  return (
    <Skeleton>
      <MovieItem
        movie={{
          id: 1,
          title: "Loading...",
          description: "Test",
          release_date: "2021-09-09",
          images: [],
        }}
      />
    </Skeleton>
  );
};

export default MovieItemSkeleton;
