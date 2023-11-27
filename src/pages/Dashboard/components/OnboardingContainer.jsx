import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function OnboardingContainer({ className, children }) {
  return <main className={twMerge(className)}>{children}</main>;
}

OnboardingContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
