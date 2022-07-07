import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/frontPage/HomePage";
import Analize from "./components/analizePage/Analize";
import "./App.css";
import Contact from "./components/ContactPage/Contact";
import Error from "./components/errorPage/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/start-deep-scan" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/analize/:url/*" element={<Analize />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
