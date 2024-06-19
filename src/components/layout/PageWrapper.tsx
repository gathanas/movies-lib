import "../../App.scss";
import classNames from "classnames";
import useTheme from "../../hooks/useTheme";
interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("page-wrapper", { "dark-mode": theme === "dark" })}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
