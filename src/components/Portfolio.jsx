import "../styles/Portfolio.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            // markers: true,
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
            <LazyLoadImage src="portfolio/01.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/02.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/03.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/04.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/05.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/06.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/07.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/08.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/09.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/10.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/11.PNG" effect="blur" />
          </div>
          <div className="grid-item">
            <LazyLoadImage src="portfolio/12.PNG" effect="blur" />
          </div>
         
        </div>

        <div className="flex-wrap">
          <div className="wrap1">
            <a href="https://jianwei2000.github.io/labor.github.io/jslearn/index.html" target="blink">
              <LazyLoadImage src="portfolio/07.PNG" effect="blur" />
            </a>
            <a href="https://jianwei2000.github.io/ToDoList/" target="blink">
              <LazyLoadImage src="portfolio/06.PNG" effect="blur" />
            </a>
            <a href="https://jianwei2000.github.io/Tea-Talk/#/" target="blink">
              <LazyLoadImage src="portfolio/01.PNG" effect="blur" />
            </a>
            <a href="https://jianwei2000.github.io/blog.github.io/Blog/index.html" target="blink">
              <LazyLoadImage src="portfolio/08.PNG" effect="blur" />
            </a>
          </div>
          <div className="wrap2">
            <a href="https://jianwei2000.github.io/SunHairSalon.github.io/SunHairSalon/designer.html" target="blink">
              <LazyLoadImage src="portfolio/10.PNG" effect="blur" />
            </a>
            <a href="https://jianwei2000.github.io/DREAMBAR.github.io/JQueryPractice/index.html" target="blink">
              <LazyLoadImage src="portfolio/09.PNG" effect="blur" />
            </a>
            <a href="https://jianwei2000.github.io/migrant/" target="blink">
              <LazyLoadImage src="portfolio/04.PNG" effect="blur" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
