import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setLoading] = useState(false);

  const handleIsLoading = () => {
    setLoading((prevState) => !prevState);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, handleIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
