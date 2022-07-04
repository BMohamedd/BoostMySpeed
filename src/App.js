import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/frontPage/HomePage";
import Analize from "./components/analizePage/Analize";
import "./App.css";
import StartDeepScan from "./components/DeepScanPage/StartDeepScan";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Contact from "./components/ContactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/start-deep-scan" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analize/:url/*" element={<Analize />} />
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
