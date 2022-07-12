import React, { createContext, useState, useEffect } from "react";

export const reportContext = createContext();

export function ReportContextProvider({ children }) {
  const [report, changeReport] = useState([]);
  const [passedaudits, changePassedaudits] = useState([]);
  const [failedaudits, changeFailedaudits] = useState([]);
  const [sideReport, changeSideReport] = useState([]);

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
