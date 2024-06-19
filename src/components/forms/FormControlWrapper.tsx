import { FormControl } from "@mui/material";

interface FormControlWrapperProps {
  children: React.ReactNode;
}

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({
  children,
}) => {
  return (
    <FormControl
      fullWidth
      style={{ marginBottom: "1rem" }}
    >
      {children}
    </FormControl>
  );
};

export default FormControlWrapper;
