import React, { useRef, useEffect } from "react";
import assets from "../assets/assets";

const GallerySection = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const scroll = () => {
    const distance = window.scrollY;
    const totalDistance = svgRef.current.clientHeight - window.innerHeight;

    const percentage = distance / totalDistance;

    const pathLength = pathRef.current.getTotalLength();

    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
  };

  useEffect(() => {
    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div>
      <section className="gallery-section">
        <figure className="pos1">
          <img src={assets.p1} alt="Image 1" />
        </figure>

        <figure className="pos2">
          <img src={assets.p2} alt="Image 2" />
        </figure>

        <figure className="pos3">
          <img src={assets.p3} alt="Image 3" />
        </figure>

        <figure className="pos4">
          <img src={assets.p4} alt="Image 4" />
        </figure>

        <figure className="pos5">
          <img src={assets.p5} alt="Image 5" />
        </figure>
      </section>

      <svg
        width="1000"
        height="2000"
        viewBox="0 0 1000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="squiggle"
        ref={svgRef}
      >
        <path
          ref={pathRef}
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#feb3b0"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default GallerySection;
