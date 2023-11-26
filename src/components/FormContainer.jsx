import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
export default function FormContainer({ children, className }) {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={twMerge(className)}>
      {children}
    </form>
  );
}

/* eslint-disable react/prop-types */
FormContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.sting,
};
