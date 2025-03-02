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
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            x:-200,
            z: -1500,
            y:-600,
            rotateY: -15,
            duration: 4,
          }
        )
        .fromTo(
          "#year2020",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: -900,
            x: -100,
            y: -400,
            rotateY: -15,
            duration: 4,
          }
        )
        .fromTo(
          "#year2021",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: -500,
            x: 0,
            y: -250,
            
            duration: 4,
          }
        )
        .fromTo(
          "#year2022",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: -300,
            x: 100,
            y: -100,
       
            duration: 4,
          }
        )
        .fromTo(
          "#year2023",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: 0,
            x: 200,
            y: 10,
            rotateY: 15,
            duration: 4,
          }
        )
        .fromTo(
          "#year2024",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: 200,
            x: 200,
            y: 100,
         
            duration: 4,
          }
        )
        .fromTo(
          "#year2025",
          { opacity: 0, scale:3, rotateY: 0 },
          {
            scale:1,
            opacity: 1,
            z: 500,
            x: 200,
            y: 150,
            duration: 4,
          }
        )
      
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
