import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>something Went wrong, please Try:</h1>
      <h2>Entering a valid url</h2>
      <h2>Trying again sometime later</h2>
      <h2>
        Contacting us by{" "}
        <a href="" onClick={() => navigate("/contact")}>
          clicking here.
        </a>
      </h2>
      <h2>Trying again sometime later</h2>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Back The Home Page
      </Button>
    </div>
  );
}

export default Error;
