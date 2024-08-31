import { createContext, useState } from "react";

export let paymentContext = createContext();
export default function PaymentContextProvider({children}) {
  const [isOnlinePaymentMethoud, setIsOnlinePaymentMethoud] = useState(true);
  return (
    <>
      <paymentContext.Provider
        value={{isOnlinePaymentMethoud , setIsOnlinePaymentMethoud}}
      >
        {children}
      </paymentContext.Provider>
    </>
  );
}
