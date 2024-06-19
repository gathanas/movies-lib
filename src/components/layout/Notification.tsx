import React from "react";
import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

interface NotificationProps
  extends SnackbarProps,
    Pick<AlertProps, "severity"> {
  message: string;
  handleClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  handleClose,
  severity,
  ...props
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...props}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
