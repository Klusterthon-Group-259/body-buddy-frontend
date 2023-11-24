import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function ButtonLink({ link, className, children }) {
  return (
    <Link
      to={link}
      className={twMerge(
        "bg-azul rounded-sm px-10 py-2 flex items-center justify-center gap-2.5 text-white hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.ReactNode,
};
