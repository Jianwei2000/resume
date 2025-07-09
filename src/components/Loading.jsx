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
