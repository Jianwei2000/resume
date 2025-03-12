import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false); // 資源已經載入完成，更新狀態為 false
      }, 5000);
    };

    window.onload = handleLoad; // 等待頁面資源完全載入後觸發

    return () => {
      window.onload = null; // 清理事件處理器
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Banner isLoading={false}/>
      <Skills />
      <Portfolio />
      <Experience />
      <Footer/>
    </>
  );
}
