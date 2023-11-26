import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types */
export default function Input({
  id,
  label,
  type,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  register,
  required,
}) {
  return (
    <label htmlFor={id} className={twMerge(className)}>
      <span className={twMerge("text-sm mb-1", labelClassName)}>{label}</span>
      <input
        {...register(id, { required })}
        id={id}
        type={type}
        placeholder={placeholder}
        className={twMerge(
          "block border rounded w-full h-8 p-4 text-sm placeholder:font-light placeholder:text-sm",
          inputClassName
        )}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
