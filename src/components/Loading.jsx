import { useEffect } from "react";
import "../styles/Loading.scss";
import gsap from "gsap";

export default function Loading() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".loader",
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 5, delay: 2, duration: 1 }
        )
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="container">
        <div className="loader"></div>
      </div>
    </>
  );
}
