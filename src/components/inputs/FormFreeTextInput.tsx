import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import Label from "../forms/Label";

const FormFreeTextInput: React.FC<TextFieldProps> = ({
  value,
  label,
  name,
  onChange,
  ...props
}) => {
  return (
    <div className="form-free-text--input">
      <Label>{label}</Label>
      <TextField
        fullWidth
        inputProps={{
          style: { background: "var(--input-background)", fontSize: "1.2rem" },
        }}
        required
        onChange={onChange}
        value={value}
        name={name}
        variant="outlined"
        {...props}
      />
    </div>
  );
};

export default FormFreeTextInput;
