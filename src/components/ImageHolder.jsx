import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function ImageHolder({ src, alt, className }) {
  return <img src={src} alt={alt} className={twMerge(className)} />;
}

ImageHolder.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
