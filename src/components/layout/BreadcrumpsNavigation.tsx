import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

const BreadcrumpsNavigation = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      className="breadcrumbs"
      aria-label="breadcrumb
        "
    >
      <Link to="/" className="link">
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        if (index === pathnames.length - 1) {

          const isNameNumberRegex = /^\d+$/.test(name);

          return (
            <Typography key={name} color="textPrimary">
              {isNameNumberRegex ? 'Details' : name}
            </Typography>
          );
        }
        return (
          <Link key={name} to={routeTo} className="link">
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumpsNavigation;
