import "../styles/Experience.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#exp",
            pin: true,
            start: "top top",
            end: "+=8000",
            markers: true,
            scrub: 4,
          },
        })
        .fromTo(
          ".road",
          {
            opacity: 0,
          },
          { opacity: 1 }
        )
        .fromTo(
          "#year2019",
          { opacity: 0, z: 1000, rotateY: 0 },
          {
            opacity: 1,
            z: -1500,
            x: -500,
            y: -5,
            rotateY: -45,
            duration: 4,
          }
        )
        .fromTo(
          "#year2020",
          { opacity: 0, z: 1500, rotateY: 0 },
          {
            opacity: 1,
            z: -800,
            x: -500,
            y: -5,
            rotateY: -35,
            duration: 4,
          }
        )
        .fromTo(
          "#year2021",
          { opacity: 0, z: 2000, rotateY: 0 },
          {
            opacity: 1,
            z: -600,
            x: -400,
            y: -50,
            rotateY: -25,
            duration: 4,
          }
        )
        .fromTo(
          "#year2022",
          { opacity: 0, z: 2500, rotateY: 0 },
          {
            opacity: 1,
            z: -400,
            x: -200,
            y: -200,
            rotateY: 35,
            duration: 4,
          }
        )
        .fromTo(
          "#year2023",
          { opacity: 0, z: 2500, rotateY: 0 },
          {
            opacity: 1,
            z: -100,
            x: -100,
            y: -400,
            rotateY: 15,
            duration: 4,
          }
        )
        .fromTo(
          "#year2024",
          { opacity: 0, z: 2500, rotateY: 0 },
          {
            opacity: 1,
            z: 0,
            x: -100,
            y: -600,

            duration: 4,
          }
        )
        .fromTo(
          "#year2025",
          { opacity: 0, z: 2500, rotateY: 0 },
          {
            opacity: 1,
            z: 500,

            y: -800,

            duration: 4,
          }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section id="exp">
        <div className="road">
          <img src="exp.png" alt="路" />
        </div>

        <div className="exp-card" id="year2019">
          <div className="year">2019</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>

        <div className="exp-card" id="year2020">
          <div className="year">2020</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>

        <div className="exp-card" id="year2021">
          <div className="year">2021</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>

        <div className="exp-card" id="year2022">
          <div className="year">2022</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>
        <div className="exp-card" id="year2023">
          <div className="year">2023</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>
        <div className="exp-card" id="year2024">
          <div className="year">2024</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>
        <div className="exp-card" id="year2025">
          <div className="year">2025</div>
          <div className="exp-content">
            <h3>工作</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              saepe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
