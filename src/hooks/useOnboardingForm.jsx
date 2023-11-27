import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function useOnboardingForm() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Context must be used inside the context provide");
  }
  return context;
}
