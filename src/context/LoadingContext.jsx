import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
