import { useContext } from "react";
import { AuthContext } from "../context/LoadingContext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Context must be used inside the context provide");
  }
  return context;
}
