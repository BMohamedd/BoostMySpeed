import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../frontPage/homePageSections/Footer";
import NavBar from "../other/NavBar";
import Default from "./DefaultPage/Default";
import Display from "./Display/Display";
import DocsDrawer from "./Drawer/DocsDrawer";

function Documentation() {
  const [open, setOpen] = useState(false);
  const { type, name } = useParams();
  return (
    <div>
      <NavBar />
      {type && name ? (
        <Display type={type} name={name} openDrawer={setOpen} />
      ) : (
        <Default openDrawer={setOpen} />
      )}
      <Footer />
      <DocsDrawer isOpen={open} setOpen={setOpen} />
    </div>
  );
}

export default Documentation;
