import { useState } from "react";
import { ApiState, MovieProps, MovieState, MovieStateEdit } from "../../types";
import dayjs from "dayjs";
import React from "react";
import PageWrapper from "../layout/PageWrapper";
import Section from "../layout/Section";
import {
  STATE_ERROR,
  STATE_IDLE,
  STATE_LOADING,
  STATE_SUCCESS,
} from "../../variables";
import fileToBase64 from "../../helpers/fileToBase64";
import Notification from "../layout/Notification";
import { useLocation, useNavigate } from "react-router-dom";
import BaseMovieForm from "../forms/BaseMovieForm";
import useMovieDetails from "../../hooks/useMovieDetails";
import editMovieApi from "../../apis/editMovieApi";
import CenteredElement from "../layout/CeneteredElement";
import { CircularProgress } from "@mui/material";

const convertFilesToBase64 = (file: File[]): Promise<string[]> => {
  const imagePromises = file.map((f) => fileToBase64(f));
  return Promise.all(imagePromises);
};

const EditMovieScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [message, setMessage] = useState<string>("");
  const [submitState, setSubmitState] = useState<ApiState>(STATE_IDLE);

  const { movie, apiState } = useMovieDetails(id as string);



  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    newMovie: MovieState
  ) => {
    e.preventDefault();

    setSubmitState(STATE_LOADING);

    const [, error] = await editMovieApi({ data: newMovie });

    if (error) {
      setSubmitState(STATE_ERROR);
      setMessage("Error occurred while editing movie");
    } else {
      setSubmitState(STATE_SUCCESS);
      setMessage("Movie edited successfully");
      navigate(`/movies/${newMovie.id}`);
    }
  };

  const getSeverity = () => {
    if (submitState === STATE_SUCCESS) return "success";
    if (submitState === STATE_ERROR) return "error";
    return "info";
  };

  const handleClose = () => {
    setSubmitState(STATE_IDLE);
    setMessage("");
  };

  if (apiState === STATE_LOADING) {
    return (
      <PageWrapper>
        <CenteredElement>
          <CircularProgress />
        </CenteredElement>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Notification
        severity={getSeverity()}
        open={message != ""}
        handleClose={handleClose}
        message={message}
      />
      <Section>
        <BaseMovieForm buttonName="Update"
          submitLoading={submitState === STATE_LOADING}
          onSubmit={onSubmit}
          initialMovieData={movie as MovieState}
        />
      </Section>
    </PageWrapper>
  );
};

export default EditMovieScreen;
