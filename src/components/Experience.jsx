import "../styles/Experience.scss";
import { useEffect } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  

    useEffect(() => {
      let ctx = gsap.context(() => {
       
        // title 動畫
        gsap.from(".exp-title", {
          scrollTrigger: {
          trigger: "#exp",
          start: "top 60%",
          end: "top 40%",
          scrub: 4,
          
        },
          x: 500,
          opacity: 0,
          duration: 3,
          
        });

        // road 動畫
        gsap.from(".road img", {
          scrollTrigger: {
          trigger: "#exp",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 4,
        },
          scale: 0.5,
          x: -500,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        });
        //exp-content
        gsap.utils.toArray(".exp-content").forEach((item, i) => {
        gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 4,
          
        },
        y: 50,
        opacity: 0,
        duration: 3,
        
      });
    });
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
              <div className="year"><p>2019</p><p className="arrow"><FaLongArrowAltDown /></p></div>
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
               <div className="year"><p>2020</p><p className="arrow"><FaLongArrowAltDown /></p></div>
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
              <div className="year"><p>2021</p><p className="arrow"><FaLongArrowAltDown /></p></div>
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
              <div className="year"><p>2022</p><p className="arrow"><FaLongArrowAltDown /></p></div>
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
              <div className="year"><p>2023</p><p className="arrow"><FaLongArrowAltDown /></p></div>
              <div className="card">
                <h3>電商海外代購-倉管人員</h3>
                <p>
                  即將要大學畢業離開高雄，在住家附近找了一份工作，一邊做一邊學，
                  因為我也想經營網路生意。就這樣一路做到兵單來通知，準備進入中華民國不願役。
                </p>
              </div>
            </div>
          </div>
          <div className="exp-content">
            <div className="card-wrap">
              <div className="year"><p>2024</p><p className="arrow"><FaLongArrowAltDown /></p></div>
              <div className="card">
                <h3>迷惘</h3>
                <p>
                  服完兵役後，開始經營我的網路個人賣場，然後一邊尋找程式領域相關的工作機會，
                  在求職過程中，遭受到的打槍、洗臉大過於建議，於是我開始專心的自學我想要開發的技術，
                  直到我發現自己的學習成效不佳，也缺乏團隊合作的經驗，最後下了決心前往資展(原資策會)受訓。
                  在資展受訓期間，很慶幸我們組內有專門負責設計稿的成員，讓我收穫最寶貴的經驗就是學會如何與設計師有效溝通與合作。
                </p>
              </div>
            </div>
          </div>
          <div className="exp-content" style={{ marginBottom: "20vh" }}>
            <div className="card-wrap">
              <div className="year"><p>2025</p></div>
              <div className="card">
                <h3>目標</h3>
                <p>
                  結訓後不久，我便接到一間公司的面試邀約，並在加入後的數個月內參與完成了一些專案開發。
                  然而，實際的技術方向與專案流程和我的預期仍有落差，因此我選擇與老闆坦誠溝通並提出離職，去尋找更符合理想的職場環境。
                  對於目標和方向，我保持隨緣的態度，因為未來充滿著無法掌握的變數。我唯一能做的，就是專注於當下、持續精進自己。
                  即使未來沒有公司錄用我，程式我還是會持續寫下去，當我的能力累積到一定水準時，我也會嘗試自己接案，開創屬於自己的道路。
                </p>
              </div>
            </div>
          </div>
          
      </section>
    </>
  );
}
