import React, { createContext, useState, useContext } from "react";

const ResetContext = createContext();

export function ResetProvider({ children }) {
  const [hasReset, setHasReset] = useState(false);

  return (
    <ResetContext.Provider value={{ hasReset, setHasReset }}>
      {children}
    </ResetContext.Provider>
  );
}

export function useReset() {
  return useContext(ResetContext);
}
