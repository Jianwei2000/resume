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
            end: "+=6000",

            scrub: 4,
          },
        })
        .fromTo(
          ".exp-title",
          {
            opacity: 0,
          },
          {
            y: -100,
            opacity: 1,
          }
        )
        .fromTo(
          ".road",
          {
            opacity: 0,
          },
          { opacity: 1 },
          "<"
        )
        .fromTo(".exp-content", { opacity: 0 }, { opacity: 1 }, "<")
        .fromTo(".exp-content", { y: 0 }, { y: "-280vh" });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section id="exp">
        <div className="road">
          <img src="exp.png" alt="路" />
        </div>

        <div className="exp-title">
          個人經歷 <span>Experience</span>
        </div>

        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2019</div>
            <div className="card">
              <h3>大學轉系</h3>
              <p>
                讀了半年的土木工程，發現自己沒有興趣，也沒有實力，
                不想白白浪費大學四年的時間， 於是轉到資管系，往自己的興趣發展。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2020</div>
            <div className="card">
              <h3>Happy100遊樂館-服務人員</h3>
              <p>
                第一份兼職工作，用時間勞力換取薪資，體驗了廉價勞工的生活，
                這也讓我立志未來要做技術性質的工作，要用腦袋來換取薪資而不是勞力。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2021</div>
            <div className="card">
              <h3>國賓影城-服務人員</h3>
              <p>
                每天下課後的日子過得有點乏味，於是又找了一份兼職，
                看似有趣的工作內容，但背後大多數人沒看到的，正是我們這些打工仔辛苦的地方。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2022</div>
            <div className="card">
              <h3>Fun4桌遊-專櫃銷售</h3>
              <p>
                到了大三，課變得比較少了，找了一份兼職來殺時間，
                店名雖然是桌遊，但其實是屬於義大商圈的專櫃之一，
                工作內容和其他比起來較輕鬆有趣。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2023</div>
            <div className="card">
              <h3>電商海外代購-倉管人員</h3>
              <p>
                即將畢業離開高雄，在住家附近找了一份工作，一邊做一邊學，
                因為我也想經營網路生意。就這樣一路做到兵單來通知，準備進入中華民國不願役。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2024</div>
            <div className="card">
              <h3>迷惘</h3>
              <p>
                服完兵役後，開始經營我的網路個人賣場，然後一邊尋找程式領域相關的工作機會，
                在求職過程中，遭受到的打槍、洗臉大過於建議，於是我開始專心的自學我想要開發的技術，
                直到我發現自己的學習成效不佳，也缺乏團隊合作的經驗，最後下了決心前往資策會受訓。
              </p>
            </div>
          </div>
        </div>
        <div className="exp-content">
          <div className="card-wrap">
            <div className="year">2025</div>
            <div className="card">
              <h3>目標</h3>
              <p>
                在資策會受訓這段期間，很慶幸我們這組有專門畫設計稿的，讓我學到最寶貴的是如何和設計師溝通合作。
                對於結訓後的求職目標和方向，我依然隨緣，未來的變數不可控，我只做好當下的自己。就算未來沒有公司要我，
                當我的level到達一個程度，我還是會自己出來接case。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
