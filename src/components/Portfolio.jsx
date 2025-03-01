import "../styles/Portfolio.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#portfolio",
            start: "top top",
            end: "+=3000",
            scrub: 4,
            markers: true,
            pin: true,
          },
        })
        .fromTo(".portfolio-title",{
            opacity:0
        },{
            y:-200,
            opacity:1
        })
        .set(".grid-item", {
          transformOrigin: "50% 0%",
          z: () => gsap.utils.random(-5000, -2000),
          filter: "brightness(0%)",
          rotationX: () => gsap.utils.random(-65, -25),
        },"<")
        .to(
          ".grid-item",
          {
            xPercent: () => gsap.utils.random(-150, 150),
            yPercent: () => gsap.utils.random(-300, 300),
            rotationX: 0,
            filter: "brightness(200%)",
          },
          0
        )
        .to(
          ".grid-wrap",
          {
            z: 6500,
          },
          0
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="portfolio">
        <div className="portfolio-title">
            作品集<span>Portfolio</span>
        </div>

        <div className="grid-wrap">
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="banner-bg.jpg" alt="" />
          </div>
          
        </div>
      </section>
    </>
  );
}
