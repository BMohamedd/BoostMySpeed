import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  finalUrlCheck,
  requestAnalize,
} from "./helperFunctions/helperFunctions";
import NavBar from "../other/NavBar";
import DisplayAnaliysis from "./DisplayAnaliysis";
import Loading from "./Loading";
import { Box } from "@mui/system";
import Footer from "../frontPage/homePageSections/Footer";

function Analize() {
  const { url } = useParams();
  const navigate = useNavigate();
  let urlToSendTheRequestTo = finalUrlCheck(url);
  const [loading, ChangeLoading] = React.useState(true);
  const [passedaudits, changePassedaudits] = React.useState([]);
  const [failedaudits, changeFailedaudits] = React.useState([]);
  const [report, changeReport] = React.useState([]);

  React.useEffect(() => {
    console.log(urlToSendTheRequestTo);
    const effect = async () => {
      const data = await requestAnalize(urlToSendTheRequestTo);
      if (!data.data) {
        navigate("/");
        // redirect to error page
      } else {
        ChangeLoading(false);
        // putting all the report in the report state
        changeReport(data);
        // putting the failed audits in the "failedaudits" state
        changeFailedaudits(
          Object.values(data.data.audits).filter((audit) => {
            return audit.score === 0 && audit.scoreDisplayMode === "binary";
          })
        );
        // putting the passed audits in the "passedaudits" state
        changePassedaudits(
          Object.values(data.data.audits).filter((audit) => {
            return audit.score === 1 && audit.scoreDisplayMode === "binary";
          })
        );
      }
    };
    effect();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <NavBar />
        <Box sx={{ mt: "5em" }}>
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
