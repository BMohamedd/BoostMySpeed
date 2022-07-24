import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/frontPage/HomePage";
import Analize from "./components/analizePage/Analize";
import Contact from "./components/ContactPage/Contact";
import Error from "./components/errorPage/Error";
import Buy from "./components/BuyPage/Buy";
import Plans from "./components/plansPage/Plans";
import Test from "./components/playGround/Test";
import PrivacyPolicy from "./components/Privacy and TOS/PrivacyPolicy";
import TOS from "./components/Privacy and TOS/TermsOS";
import Success from "./components/successPage/Success";
import "./App.css";
import Careers from "./components/Careers/Careers";
import Scroll from "./components/other/scroll/Scroll";
import Faqs from "./components/FAQsPage/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/start-deep-scan" element={<HomePage />} />
        <Route path="/playGround" element={<Test />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/success" element={<Success />} />
        <Route path="/buy/:name" element={<Buy />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-And-Conditions" element={<TOS />} />
        <Route path="/error" element={<Error />} />
        <Route path="/analize/:url/*" element={<Analize />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
