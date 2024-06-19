import { CircularProgress } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

interface MainButtonProps extends ButtonProps {
  loading?: boolean;
  width?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  loading,
  width,
  disabled,
  ...props
}) => {
  return (
    <Button
      disabled={loading || disabled}
      className="movies-app-button"
      sx={{
        width,
        background: "var(--primary-color)",
        color: "var(--secondary-color)",
        "&:hover": {
          background: "var(--primary-color-dark)",
        },
      }}
      {...props}
    >
      {loading ? <CircularProgress size={20} /> : children}
    </Button>
  );
};

export default MainButton;
