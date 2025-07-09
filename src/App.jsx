import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default function App() {

  useEffect(()=>{
     // 禁止滾動
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return ()=>{
      setTimeout(()=>{

        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      },4000)
    }

  },[])

  return (
    <>
      <Loading />;
      <Navbar />
      <Banner />
      <Skills />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
}
