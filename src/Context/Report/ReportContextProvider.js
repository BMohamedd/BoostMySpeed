import React, { createContext, useState, useEffect } from "react";

export const reportContext = createContext();

export function ReportContextProvider({ children }) {
  const [report, changeReport] = useState([]);
  const [passedaudits, changePassedaudits] = React.useState([]);
  const [failedaudits, changeFailedaudits] = React.useState([]);
  const [sideReport, changeSideReport] = React.useState([]);

  const fillPassedAndFailed = () => {
    if (report.data) {
      changePassedaudits(
        Object.values(report.data.audits).filter((audit) => {
          return audit.score === 1 && audit.scoreDisplayMode === "binary";
        })
      );
      changeFailedaudits(
        Object.values(report.data.audits).filter((audit) => {
          return audit.score === 0 && audit.scoreDisplayMode === "binary";
        })
      );
    }
  };

  const switchStates = () => {
    const TempHoder = JSON.parse(JSON.stringify(sideReport));
    changeSideReport(report);
    changeReport(TempHoder);
    fillPassedAndFailed();
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
