import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function AuthContainer({
  mainClassName,
  divClassName,
  children,
}) {
  return (
    <main className={twMerge(mainClassName)}>
      <div className={twMerge(divClassName)}>{children}</div>
    </main>
  );
}

AuthContainer.propTypes = {
  mainClassName: PropTypes.string,
  divClassName: PropTypes.string,
  children: PropTypes.node,
};
