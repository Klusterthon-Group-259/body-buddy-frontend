import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function Button({ type = "submit", className, children }) {
  return (
    <button
      type={type}
      className={twMerge(
        "bg-azul rounded-sm px-10 py-2 flex items-center justify-center gap-2.5 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
