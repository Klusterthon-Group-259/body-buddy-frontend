import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [form, setForm] = useState({
    id: "",
    age: "",
    firstName: "",
    lastname: "",
    gender: "",
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node,
};
