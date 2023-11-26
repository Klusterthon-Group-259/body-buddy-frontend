import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function AuthOption({
  question = "Forgot Password?",
  link = "/forgot-password",
  className = "text-vermilion",
  action = "Reset",
}) {
  return (
    <p className="text-xs my-0.5 font-light flex items-center justify-end gap-1">
      {question}
      <Link to={link} className={twMerge("hover:underline", className)}>
        {action}
      </Link>
    </p>
  );
}

AuthOption.propTypes = {
  question: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  action: PropTypes.string,
};
