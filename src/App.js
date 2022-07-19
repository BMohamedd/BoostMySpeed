import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/frontPage/HomePage";
import Analize from "./components/analizePage/Analize";
import "./App.css";
import Contact from "./components/ContactPage/Contact";
import Error from "./components/errorPage/Error";
import Buy from "./components/BuyPage/Buy";
import Plans from "./components/plansPage/Plans";
import Test from "./components/playGround/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/start-deep-scan" element={<HomePage />} />
        <Route path="/playGround" element={<Test />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/buy/:name" element={<Buy />} />
        <Route path="/error" element={<Error />} />
        <Route path="/analize/:url/*" element={<Analize />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
