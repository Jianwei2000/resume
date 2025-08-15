import "../styles/Banner.scss";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import gsap from "gsap";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          "#banner",
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 1 }
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="banner">
        <div className="pic">
          <img src="about.jpg" alt="人物" />
        </div>

        <div className="intro">
          <h1>
            健洧 <span>JianWei</span>
          </h1>

          <p>
            自從接觸程式設計以來，寫程式對我而言不僅是一份工作，更是成就感的來源，這也是我投入技術領域的初衷。
            2024 年退伍後，我開始自學網頁開發，雖然充滿熱忱，但也意識到學習資源有限、效率不佳。
            為了突破瓶頸，我選擇進入資展國際，接受更系統化且實戰導向的培訓。
            結訓後不久，我便接到一間公司的面試邀約，並在加入後的數個月內參與完成了一些專案開發。 
            然而，實際的技術方向與專案流程和我的預期仍有落差，
            因此希望能加入更成熟的開發團隊，持續累積技術深度並發揮所長。
          </p>
          <div className="social">
            <a href="https://github.com/Jianwei2000" target="blink">
              <FaGithub />
            </a>
            <a href="mailto:er891129@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="smoke"></div>
      </section>
    </>
  );
}
