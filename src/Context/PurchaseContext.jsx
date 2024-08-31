import React, { createContext, useState, useContext } from "react";

const PurchaseContext = createContext();


export function PurchaseProvider({ children }) {
  const [hasPurchased, setHasPurchased] = useState(false);

  return (
    <PurchaseContext.Provider value={{ hasPurchased, setHasPurchased }}>
      {children}
    </PurchaseContext.Provider>
  );
}


export function usePurchase() {
  return useContext(PurchaseContext);
}
