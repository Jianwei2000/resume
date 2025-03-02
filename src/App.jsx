import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Navbar from "./components/navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
}
