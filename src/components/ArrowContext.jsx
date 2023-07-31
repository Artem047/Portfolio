import { createContext, useContext, useState } from "react";

const ArrowContext = createContext();

export const useArrowContext = () => useContext(ArrowContext);

export const ArrowProvider = ({ children }) => {
  const [showArrow, setShowArrow] = useState(true);

  return (
    <ArrowContext.Provider value={{ showArrow, setShowArrow }}>
      {children}
    </ArrowContext.Provider>
  );
};
