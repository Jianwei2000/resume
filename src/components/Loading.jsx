import { useEffect, useState } from "react";
import "../styles/Loading.scss";
import gsap from "gsap";
import {  GiSoundOff, GiSoundOn } from "react-icons/gi";

export default function Loading({ bgmAllowed, setBgmAllowed }) {
  useEffect(() => {
    // 把 h1 的字逐字拆開成 span
    const title = document.querySelector(".load-title");
    const text = title.textContent;
    title.textContent = ""; // 清空原本內容

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0;
      title.appendChild(span);
    });
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(".load-title span", {
          opacity: 1,
          duration: 1,
          stagger: 0.1, // 每個字延遲
          ease: "power2.out",
        })
        .fromTo(
          ".bgm-select",
          {
            opacity: 0,
          },
          { opacity: 1, duration: 1 }
        );
    });

    return () => {
      ctx.revert();
    };
  });

  const handleSelect = (allow) => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => setBgmAllowed(allow),
        })
        .fromTo(".load-container", { opacity: 1 }, { opacity: 0 });
    });

    return () => {
      ctx.revert();
    };
  };

  return (
    <>
      <div className="load-container">
        <h1 className="load-title">歡迎參觀~ 請選擇是否啟用BGM 🎧️</h1>
        {bgmAllowed === null && (
          <div className="bgm-select">
            <button onClick={() => handleSelect(false)}>
              <GiSoundOff />
              禁用
            </button>
            <button onClick={() => handleSelect(true)}>
              <GiSoundOn />
              啟用
            </button>
          </div>
        )}
      </div>
    </>
  );
}
