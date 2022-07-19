import React, { createContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const paymentcontext = createContext();

export function PaymentContextProvider({ children }) {
  const { Item, changeItem } = useLocalStorage("step", "0");

  return (
    <paymentcontext.Provider
      value={{
        Item,
        changeItem,
      }}
    >
      {children}
    </paymentcontext.Provider>
  );
}
