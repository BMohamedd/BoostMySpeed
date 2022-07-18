import React from "react";
import { ReportContextProvider } from "./Report/ReportContextProvider";
import { PaymentContextProvider } from "./Payment/paymentContextProvider";

function MainContext({ children }) {
  return (
    <PaymentContextProvider>
      <ReportContextProvider>{children}</ReportContextProvider>
    </PaymentContextProvider>
  );
}

export default MainContext;
