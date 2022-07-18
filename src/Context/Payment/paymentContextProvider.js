import React, { createContext, useState } from "react";

export const paymentcontext = createContext();

export function PaymentContextProvider({ children }) {
  const [step, changeStep] = useState(0);
  const [selectedPlan, changeSelectedPlan] = useState("basic");
  const [price, changePrice] = useState("300");
  const changePlanAndPrice = (newPlan) => {
    changeSelectedPlan(newPlan);
    switch (newPlan) {
      case "basic":
        return changePrice("300");
      case "standard":
        return changePrice("600");
      case "premium":
        return changePrice("1200");
    }
  };

  return (
    <paymentcontext.Provider
      value={{
        changePlanAndPrice,
        price,
        selectedPlan,
        step,
        changeStep,
      }}
    >
      {children}
    </paymentcontext.Provider>
  );
}
