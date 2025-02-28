import "../styles/Skills.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { FaHtml5, FaCss3Alt, FaPhp, FaNode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
export default function Skills() {
  const skills = {
    html: 90,
    css: 95,
    javascript: 70,
    react: 65,
    vue: 50,
    mysql: 75,
    php: 40,
    node: 45,
  };

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "top 50%",
          markers: true,
        },
      })
      .to(".level", {
        width: (index) => `${Object.values(skills)[index]}%`, // 動態設定寬度
        duration: 5,
      })
      .fromTo(
        ".level span",
        { innerHTML: "0%", opacity: 0 },
        {
          opacity: 1,
          innerHTML: (index) => `${Object.values(skills)[index]}%`, // 動態設定數字
          duration: 5,
          stagger: 0.1, // 動畫延遲
          snap: { innerHTML: 1 }, // 保證數字每次增加的最小單位是 1
        },
        "<"
      );
  }, []);

  return (
    <>
      <section id="skills">
        <div className="skills-title">
          能力值 <span>Skills</span>
        </div>

        <div className="container">
          <div className="frontend">
            {/* <h2>Front-End</h2> */}
            <div className="skill">
              <p>
                <FaHtml5
                  style={{
                    color: "#F74A1D",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                {""}HTML
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.html}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <FaCss3Alt
                  style={{
                    color: "#0068BA",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                CSS / SCSS
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.css}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <DiJavascript
                  style={{
                    color: "#F6AA3F",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                JAVASCRIPT
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.javascript}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <RiReactjsLine
                  style={{
                    color: "#5ED3F3",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                REACT
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.react}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <IoLogoVue
                  style={{
                    color: "#3FB27E",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                VUE
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.vue}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backend">
            {/* <h2>Back-End</h2> */}
            <div className="skill">
              <p>
                <SiMysql
                  style={{
                    color: "#42759C",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />{" "}
                MYSQL
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.mysql}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <FaPhp
                  style={{
                    color: "#7377AD",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                PHP
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.php}%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <p>
                <FaNode
                  style={{
                    color: "#4A9240",
                    fontSize: "40px",
                    marginRight: "10px",
                  }}
                />
                NODE
              </p>
              <div className="skill-bar">
                <div className="level">
                  <span>{skills.node}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
