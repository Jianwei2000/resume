import "../styles/Experience.scss"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useEffect(()=>{

  },[])
  return (
    <>
      <section id="exp">
          <div className="road">
            <img src="exp.png" alt="路" />
          </div>
      </section>
    </>
  );
}
