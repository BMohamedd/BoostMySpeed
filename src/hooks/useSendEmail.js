import { useState } from "react";
import axios from "axios";
// this hook is used to send scan information nothing more ;)

const useSendEmail = (endPoint) => {
  const [submitted, setSubmitted] = useState(false);
  const [Eloading, setEloading] = useState(false);
  const [error, setError] = useState();
  const sendEmail = (data) => {
    setEloading(true);
    setSubmitted(false);
    setError(undefined);
    axios
      .post(endPoint, JSON.stringify(data))
      .then((response) => {
        // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
        if (response.status === 422) {
          throw new Error("Are you robot?");
        }

        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }
        return response.json();
      })
      .then(() => {
        setSubmitted(true);
        setEloading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setEloading(false);
      });
  };
  return {
    submitted,
    Eloading,
    error,
    sendEmail,
  };
};
export default useSendEmail;
