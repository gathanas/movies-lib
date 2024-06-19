import { FormLabel } from "@mui/material";

type LabelProps = {
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <FormLabel style={{ color: "var(--label-color)", fontSize: "1.1rem",marginBottom:'0.2rem' }}>
      {children}
    </FormLabel>
  );
};

export default Label;
