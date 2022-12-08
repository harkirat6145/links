import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer";
import Setup from "../routes";
export default function MainPage() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar title="Home " brand="React js" />
        <Setup />
        <Footer />
      </BrowserRouter>
    </>
  );
}
