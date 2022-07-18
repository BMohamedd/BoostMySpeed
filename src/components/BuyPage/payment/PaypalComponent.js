import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useContext, useEffect } from "react";
import { paymentcontext } from "../../../Context/Payment/paymentContextProvider";

export default function PaypalComponent() {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const { price, selectedPlan } = useContext(paymentcontext);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Speedyourweb " + selectedPlan + " Plan.",
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AfQfppBdfjo69oWG2qTx1kUgezbxaWdv-ADC5FrvrLWkKYeFytS_6MtvLCowYfC8LFwglsHQE_93Gkm9",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
