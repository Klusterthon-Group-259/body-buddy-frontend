import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Logo({ link, src, className }) {
  return (
    <Link to={link} className="flex justify-center">
      <img src={src} alt="bodybuddy logo" className={twMerge(className)} />
    </Link>
  );
}

Logo.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};
