import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  finalUrlCheck,
  requestAnalize,
  requestAnalizeDesktop,
} from "./helperFunctions/helperFunctions";
import NavBar from "../other/NavBar";
import DisplayAnaliysis from "./DisplayAnaliysis";
import Loading from "./Loading";
import { Box } from "@mui/system";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Footer from "../frontPage/homePageSections/Footer";
import { Tab, Tabs } from "@mui/material";
import { reportContext } from "../../Context/Report/ReportContextProvider";

function Analize() {
  const { url } = useParams();
  const navigate = useNavigate();
  const {
    switchStates,
    changeReport,
    report,
    passedaudits,
    failedaudits,
    changeSideReport,
    sideReport,
    fillPassedAndFailed,
  } = React.useContext(reportContext);
  let urlToSendTheRequestTo = finalUrlCheck(url);
  const [loading, ChangeLoading] = React.useState(true);
  const [disktopScanLoading, changedisktopScanLoading] = React.useState(true);
  const [currentTab, changeCurrentTab] = React.useState("1");

  React.useEffect(() => {
    const effect = async () => {
      const { data } = await requestAnalize(urlToSendTheRequestTo);
      if (!data.lighthouseResult || data.lighthouseResult.runtimeError) {
        // redirect to error page
        navigate("/error");
      } else {
        ChangeLoading(false);
        changeReport(data.lighthouseResult);
        fillPassedAndFailed();
        RequestDisktopInfo();
      }
    };
    effect();
  }, []);
  const RequestDisktopInfo = async () => {
    const { data } = await requestAnalizeDesktop(urlToSendTheRequestTo);
    if (!data.lighthouseResult || data.lighthouseResult.runtimeError) {
      // redirect to error page
      navigate("/error");
    } else {
      // store the report in the side Report
      changedisktopScanLoading(false);
      changeSideReport(data.lighthouseResult);
    }
  };
  const changeDisplayedReport = () => {
    if (!disktopScanLoading && sideReport.audits) {
      switchStates();
      currentTab === "1" ? changeCurrentTab("2") : changeCurrentTab("1");
    } else {
      console.log("cannot display disktop scan");
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <NavBar />
        <Box sx={{ mt: { xs: "10em", sm: "5em" } }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={currentTab}
              onChange={changeDisplayedReport}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab icon={<PhoneAndroidIcon />} value="1"></Tab>
              <Tab
                icon={disktopScanLoading ? null : <LaptopMacIcon />}
                label={disktopScanLoading ? "Loading..." : ""}
                value="2"
                disabled={disktopScanLoading ? true : false}
              ></Tab>
            </Tabs>
          </Box>

          <DisplayAnaliysis
            passed={passedaudits}
            failed={failedaudits}
            fullReport={report}
          />
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Analize;
