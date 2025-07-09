import { useEffect } from "react";
import "../styles/Loading.scss";
import gsap from "gsap";

export default function Loading() {
  useEffect(() => {
     // 禁止滾動
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let ctx = gsap.context(() => {
      gsap
        .timeline({
        onComplete: () => {
          // ✅ 動畫結束後恢復滾動
          gsap.set("body", { overflow: "auto" });
          gsap.set("html", { overflow: "auto" });
        },
      })
        .set("body", { overflow: "hidden" })
        .set("html", { overflow: "hidden" })
        .fromTo(
          ".loader",
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 2.5, delay: 4, duration: 1 }
        ).fromTo(
          ".container",
          {opacity:1,zIndex:999},
          {opacity:0,zIndex:-100}
        )
    });
    
    return () => {
      ctx.revert()
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="loader"></div>
      </div>
    </>
  );
}
