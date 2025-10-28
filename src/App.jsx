import { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default function App() {
  const [bgmAllowed, setBgmAllowed] = useState(null);
  const bgm = useRef(null);
  useEffect(() => {
    if (bgmAllowed === null) return;

    if (bgmAllowed) {
      bgm.current.play().catch(() => {
        console.log("BGM 播放被瀏覽器阻擋");
      });
    } else {
      bgm.current.pause();
    }
  }, [bgmAllowed]);

  if (bgmAllowed === null) {
    return <Loading bgmAllowed={bgmAllowed} setBgmAllowed={setBgmAllowed} />;
  }

  return (
    <>
      <audio ref={bgm} src="bgm.mp3" loop hidden></audio>
      <Navbar />
      <Banner />
      <Skills />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
}
