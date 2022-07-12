import React, { createContext, useState, useEffect } from "react";
import useSendEmail from "../../hooks/useSendEmail";
export const reportContext = createContext();

export function ReportContextProvider({ children }) {
  const [report, changeReport] = useState([]);
  const [sent, changeSent] = useState(false);
  const [passedaudits, changePassedaudits] = useState([]);
  const [failedaudits, changeFailedaudits] = useState([]);
  const [sideReport, changeSideReport] = useState([]);
  const { Eloading, submitted, error, sendEmail } = useSendEmail(
    "https://public.herotofu.com/v1/7aa5ce80-01d2-11ed-bc36-e1ea9ccadd33"
  );

  useEffect(() => {
    if (report.audits) {
      changePassedaudits(
        Object.values(report.audits).filter((audit) => {
          return audit.score === 1 && audit.scoreDisplayMode === "binary";
        })
      );
      changeFailedaudits(
        Object.values(report.audits).filter((audit) => {
          return audit.score === 0 && audit.scoreDisplayMode === "binary";
        })
      );
    }
  }, [report]);
  useEffect(() => {
    if (!sent && sideReport.audits && report.audits) {
      sendEmailFunction();
    }
  }, [sideReport, report]);

  const sendEmailFunction = () => {
    sendEmail({
      websiteURL: report.finalUrl,
      mobilePerformance: Math.round(report.categories.performance.score * 100),
      desktopPerformance: Math.round(
        sideReport.categories.performance.score * 100
      ),
    });
    changeSent(true);
  };

  const switchStates = () => {
    const TempHoder = JSON.parse(JSON.stringify(sideReport));
    changeSideReport(report);
    changeReport(TempHoder);
  };
  return (
    <reportContext.Provider
      value={{
        switchStates,
        changeReport,
        report,
        passedaudits,
        failedaudits,
        sideReport,
        changeSideReport,
      }}
    >
      {children}
    </reportContext.Provider>
  );
}
