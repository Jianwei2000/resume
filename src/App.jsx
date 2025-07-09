import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <Loading />
      <Navbar />
      <Banner />
      <Skills />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
}
