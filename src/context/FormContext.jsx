import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [form, setForm] = useState({
    id: 0,
    age: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  const updateForm = (updatedValues) => {
    setForm((prevForm) => ({ ...prevForm, ...updatedValues }));
  };

  return (
    <FormContext.Provider value={{ form, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node,
};
