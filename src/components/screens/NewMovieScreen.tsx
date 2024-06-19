import { useState } from "react";
import { ApiState, MovieProps, MovieState } from "../../types";
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
import createMovieApi from "../../apis/createMovieApi";
import fileToBase64 from "../../helpers/fileToBase64";
import Notification from "../layout/Notification";
import BaseMovieForm from "../forms/BaseMovieForm";
import { useNavigate } from "react-router-dom";

const convertFilesToBase64 = (file: File[]): Promise<string[]> => {
  const imagePromises = file.map((f) => fileToBase64(f));
  return Promise.all(imagePromises);
};


const NewMovieScreen = () => {

  const navigate = useNavigate();

  const [message, setMessage] = useState<string>("");
  const [submitState, setSubmitState] = useState<ApiState>(STATE_IDLE);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>,newMovie:MovieState) => {
    e.preventDefault();

    setSubmitState(STATE_LOADING);

    const base64Images = await convertFilesToBase64(newMovie.images);

    const dataWithId:MovieState = {
      ...newMovie,
      images: base64Images,
      id: Math.floor(Math.random() * 1000),
    };


    const [, error] = await createMovieApi({ data: dataWithId });

    if (error) {
      setSubmitState(STATE_ERROR);
      setMessage("Error occurred while creating movie");
    } else {
      setSubmitState(STATE_SUCCESS);
      setMessage("Movie created successfully");
      navigate("/");
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

  return (
    <PageWrapper>
      <Notification
        severity={getSeverity()}
        open={message != ""}
        handleClose={handleClose}
        message={message}
      />
      <Section>
        <BaseMovieForm buttonName="Create"
          submitLoading={submitState === STATE_LOADING}
          onSubmit={onSubmit}
        />
      </Section>
    </PageWrapper>
  );
};

export default NewMovieScreen;
