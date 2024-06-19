import React from "react";
import { Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import PageWrapper from "../layout/PageWrapper";
import CenteredElement from "../layout/CeneteredElement";

const NotFoundScreen: React.FC = () => {
  return (
    <PageWrapper>
      <CenteredElement>
        <ErrorOutline fontSize="large" style={{marginBottom:'0.3rem'}} color="error" />
        <Typography color={"white"} variant="h5">
          Page Not Found
        </Typography>
      </CenteredElement>
    </PageWrapper>
  );
};

export default NotFoundScreen;
