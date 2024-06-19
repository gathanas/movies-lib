import React from "react";
import { MuiFileInput, MuiFileInputProps } from "mui-file-input";
import Label from "../forms/Label";
import FormControlWrapper from "../forms/FormControlWrapper";

const ImageUpload: React.FC<MuiFileInputProps> = ({
  value,
  label,
  onChange,
  multiple,
}) => {
  return (
    <FormControlWrapper>
      <Label>{label}</Label>
      {/* @ts-expect-error */}
      <MuiFileInput
        sx={{
          fontSize: "1.2rem",
          cursor: "pointer",
          background: "var(--input-background)",
          color: "var(--primary-color)",
          "::placeholder": { color: "var(--primary-color)" },
        }}
        variant="filled"
        multiple={multiple}
        inputProps={{
          accept: ".png, .jpeg, .jpg",
          style: { cursor: "pointer" },
          fontSize: "1.2rem",
        }}
        value={value}
        onChange={onChange}
      />
    </FormControlWrapper>
  );
};

export default ImageUpload;
