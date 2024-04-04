import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
      <div className="sticky top-4 z-40">
        <footer className="py-3 shadow-md shadow-blue-gray-500/5">
          <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
            <Typography variant="small" className="font-normal text-inherit">
              &copy; 2014 - {year}, {brandName} S.r.l. Tutti i diritti riservati
            </Typography>
            <ul className="flex items-center gap-4">
              {routes.map(({ name, path }) => (
                  <li key={name}>
                    <Typography
                        as="a"
                        href={path}
                        target="_blank"
                        variant="small"
                        className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                      {name}
                    </Typography>
                  </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
  );
}

Footer.defaultProps = {
  brandName: "Cronotime",
  brandLink: "https://www.cronotime.it/",
  routes: [
    { name: "Acquedotto", path: "https://www.aqp.it" },
    { name: "Scopri di più!", path: "https://www.aqp.it/scopri-acquedotto" }, // Updated name
    { name: "Perché Acquedotto?", path: "https://www.aqp.it/perche-acquedotto" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
