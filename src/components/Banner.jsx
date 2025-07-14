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
            自從接觸程式設計以來，寫程式對我來說不僅是工作，更是成就感的來源，這也是我選擇進入技術領域的初衷。
            2024年結束兵役後，我開始一邊經營網路個人賣場，一邊自學網頁開發技術，這段時間讓我深刻感受到學習資源有限，且學習方式缺乏效率。
            為了突破這些瓶頸，我決定前往資展國際接受更系統化的訓練。
            雖然目前尚未擁有與程式設計相關的工作經驗，但我始終堅持不懈的提升自己的能力，
            並且期待能在未來的職場中發揮所學，迎接更多挑戰。
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
