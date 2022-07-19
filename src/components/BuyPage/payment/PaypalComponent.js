import { useState, useContext, useEffect, useRef } from "react";
import { paymentcontext } from "../../../Context/Payment/paymentContextProvider";

export default function PaypalComponent({ price }) {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const { changeItem } = useContext(paymentcontext);
  const paypalButton = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Speedyourweb plan",
                amount: {
                  value: price,
                  currency_code: "USD",
                },
              },
            ],
            // not needed if a shipping address is actually needed
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            changeItem("2");
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalButton.current);
  }, [price]);
  return <div ref={paypalButton}></div>;
}
