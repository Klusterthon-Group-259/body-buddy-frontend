import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("Context must be used inside the context provide");
  }
  return context;
}
