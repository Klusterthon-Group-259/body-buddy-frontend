import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function Title({ className, children }) {
  return (
    <h1 className={twMerge("text-2xl font-semibold mb-4", className)}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.ReactNode,
};
