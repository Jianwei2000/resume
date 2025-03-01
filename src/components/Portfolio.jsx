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
        .fromTo(
          ".portfolio-title",
          {
            opacity: 0,
          },
          {
            y: -200,
            opacity: 1,
          }
        )
        .set(
          ".grid-item",
          {
            transformOrigin: "50% 0%",
            z: () => gsap.utils.random(-5000, -2000),
            filter: "brightness(0%)",
            rotationX: () => gsap.utils.random(-65, -25),
          },
          "<"
        )
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
        )
        .fromTo(
          ".wrap1",
          {
            x: 2000,
          },
          { x: -250 }
        )
        .fromTo(
          ".wrap2",
          {
            x: -2200,
          },
          { x: 50 },
          "<"
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
            <img src="portfolio/01.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/02.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/03.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/04.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/05.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/06.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/07.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/08.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/09.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/10.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/11.PNG" alt="" />
          </div>
          <div className="grid-item">
            <img src="portfolio/12.PNG" alt="" />
          </div>
         
        </div>

        <div className="flex-wrap">
          <div class="wrap1">
            <a href="https://jianwei2000.github.io/labor.github.io/jslearn/index.html" target="blink">
              <img src="portfolio/07.PNG" alt="" />
            </a>
            <a href="https://jianwei2000.github.io/ToDoList/" target="blink">
              <img src="portfolio/06.PNG" alt="" />
            </a>
            <a href="https://jianwei2000.github.io/Tea-Talk/#/" target="blink">
              <img src="portfolio/01.PNG" alt="" />
            </a>
            <a href="https://jianwei2000.github.io/blog.github.io/Blog/index.html" target="blink">
              <img src="portfolio/08.PNG" alt="" />
            </a>
          </div>
          <div class="wrap2">
            <a href="https://jianwei2000.github.io/SunHairSalon.github.io/SunHairSalon/designer.html" target="blink">
              <img src="portfolio/10.PNG" alt="" />
            </a>
            <a href="https://jianwei2000.github.io/migrant/" target="blink">
              <img src="portfolio/04.PNG" alt="" />
            </a>
            <a href="https://jianwei2000.github.io/DREAMBAR.github.io/JQueryPractice/index.html" target="blink">
              <img src="portfolio/09.PNG" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
