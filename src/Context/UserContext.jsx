import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserLogin(localStorage.getItem("userToken"));
    }

    if(localStorage.getItem("userEmail")){
      setUserEmail(localStorage.getItem("userEmail"));
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ userLogin, setUserLogin, userEmail, setUserEmail }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
