import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const HeroSection = () => {
  useGSAP(() => {
    const heroTimeless = new SplitText(".hero-timeless", {
      type: "chars",
    });
    const heroCelebrations = new SplitText(".hero-celebrations", {
      type: "chars",
    });
    const heroThoughtfully = new SplitText(".hero-thoughtfully", {
      type: "chars",
    });
    const heroPlanned = new SplitText(".hero-planned", {
      type: "chars",
    });
    const subtitle = document.querySelector(".hero-subtitle-container");
    const button = document.querySelector(".hero-button-container");
    gsap.from(heroTimeless.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(heroCelebrations.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(heroThoughtfully.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
    gsap.from(heroPlanned.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
    gsap.from(subtitle, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(button, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      delay: 1,
    });
  });

  return (
    <div className="hero-container">
      <div className="hero-heading">
        <div className="hero-heading-text">
          <span className="hero-timeless">TIMELESS</span>
          <span className="hero-celebrations">CELEBRATIONS,</span>
          <span className="hero-thoughtfully">THOUGHTFULLY</span>
          <span className="hero-planned">PLANNED</span>
        </div>
      </div>
      <div className="hero-elements">
        <div className="hero-subtitle-container">
          <p>
            LushEvents – Weddings, birthdays, and every <br /> beautiful
            milestone in between.
          </p>
        </div>
        <div className="hero-button-container">
          <button className="hero-glass-btn">Book Your Event</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
