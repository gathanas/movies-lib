import dayjs, { Dayjs } from "dayjs";
import MainButton from "../buttons/MainButton";
import FormDatePickerInput from "../inputs/FormDatePickerInput";
import FormFreeTextInput from "../inputs/FormFreeTextInput";
import ImageUpload from "../inputs/ImageUpload";
import { MovieState } from "../../types";
import { useState } from "react";

interface BaseMovieFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, movie: MovieState) => void;
  submitLoading: boolean;
  initialMovieData?: MovieState;
  buttonName:string
}

const BaseMovieForm: React.FC<BaseMovieFormProps> = ({
  onSubmit,
  submitLoading,
  initialMovieData,
  buttonName
}) => {

  const [movie, setMovie] = useState<MovieState>(
    initialMovieData ?? {
      id: 0,
      title: "",
      description: "",
      release_date: dayjs().format("YYYY-MM-DD"),
      images: [],
    }
  );

  const handleFileChange = async (file: File[]) => {
    setMovie((prev) => ({
      ...prev,
      images: file,
    }));
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const onDateChange = (value: Dayjs | null) => {
    setMovie((prev) => ({
      ...prev,
      release_date: value ? value.format("YYYY-MM-DD") : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e, movie);
  };

  return (
    <form onSubmit={handleSubmit} className="form--new-movie">
      <FormFreeTextInput
        value={movie.title}
        label={"Title"}
        name="title"
        onChange={onTextChange}
      />
      <FormFreeTextInput
        multiline
        rows={4}
        value={movie.description}
        label={"Description"}
        name="description"
        onChange={onTextChange}
      />
      <FormDatePickerInput
        value={dayjs(movie.release_date)}
        onChange={onDateChange}
        label={"Release Date"}
      />
      {!initialMovieData && <ImageUpload
        label={"Image Upload"}
        multiple={true}
        value={movie.images}
        onChange={handleFileChange}
      />}
      <MainButton
        loading={submitLoading}
        type="submit"
        style={{
          height: "47px",
          marginLeft: "auto",
          marginTop: "2rem",
        }}
        variant="contained"
      >
        {buttonName}
      </MainButton>
    </form>
  );
};

export default BaseMovieForm;
