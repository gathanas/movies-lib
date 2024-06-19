import React from "react";
import {
  LocalizationProvider,
  DatePicker,
  DatePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControlWrapper from "../forms/FormControlWrapper";
import Label from "../forms/Label";
const FormDatePickerInput: React.FC<DatePickerProps<any>> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <FormControlWrapper>
      <Label>{label}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{
            textField: {
              style: {
                background: "var(--input-background)",
                fontSize: "1.2rem",
              },
            },
          }}
          sx={{
            style: {
              background: "var(--input-background)",
              fontSize: "1.2rem",
            },
            background: "var(--input-background)",
            color: "var(--label-color)",
          }}
          disableFuture
          disableHighlightToday
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
    </FormControlWrapper>
  );
};

export default FormDatePickerInput;
