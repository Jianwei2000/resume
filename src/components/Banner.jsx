import "../styles/Banner.scss";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Banner() {
  
  return (
    <>
      <section id="banner">
        <div className="pic">
          <LazyLoadImage src="about.jpg" alt="人物" effect="blur" />
        </div>

        <div className="intro">
          <h1>
            健洧 <span>JianWei</span>{" "}
          </h1>
          <h2>
            {" "}
            <span></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            possimus, ullam iusto quo accusantium molestiae quod! Placeat
            laborum beatae tenetur doloremque quasi ducimus quas magni quos ad
            omnis, quaerat fugiat.
          </p>
          <div className="social">
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="smoke"></div>
      </section>
    </>
  );
}
