import "./Pages.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "../Components/Navigation.jsx";
import Baselayer from "../Components/Baselayer.jsx";
import Baselayer1 from "../Components/Baselayer1.jsx";
import Baselayer2 from "../Components/Baselayer2.jsx";
import FAQ1 from "../Components/FAQ1.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import Offer from "../UI/Offer.jsx";
import Top from "../Components/Top.jsx";
import Top1 from "../Components/Top1.jsx";
import Top2 from "../Components/Top2.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Baselayers() {
  const topRef = useRef(null);
  const bagRef = useRef(null);

  // Scroll animation for BOTH sections
  useEffect(() => {
    const animateCards = (ref) => {
      if (!ref.current) return;

      const cards = ref.current.querySelectorAll(".bag-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    };

    animateCards(topRef);
    animateCards(bagRef);
  }, []);

  // CTA hover animation
  useEffect(() => {
    const buttons = document.querySelectorAll(".shop-now-button");
    if (!buttons.length) return;

    const cleanups = [];

    buttons.forEach((ctaBtn) => {
      const defaultText = ctaBtn.querySelector(".btn-text");
      const hoverText = ctaBtn.querySelector(".btn-hover-text");
      if (!defaultText || !hoverText) return;

      gsap.set(defaultText, { yPercent: 0, opacity: 1 });
      gsap.set(hoverText, { yPercent: 30, opacity: 0 });

      const onEnter = () => {
        gsap.killTweensOf([defaultText, hoverText]);
        gsap.to(defaultText, {
          yPercent: -30,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(hoverText, {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.killTweensOf([defaultText, hoverText]);
        gsap.to(hoverText, {
          yPercent: 30,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
        gsap.to(defaultText, {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.in",
        });
      };

      ctaBtn.addEventListener("mouseenter", onEnter);
      ctaBtn.addEventListener("mouseleave", onLeave);

      cleanups.push(() => {
        ctaBtn.removeEventListener("mouseenter", onEnter);
        ctaBtn.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <Navigation />
      <Offer />

      {/* Intro */}
      <div className="bagpage-intro">
        <h1>Men's Baselayers</h1>
        <p>
          Functional baselayers designed to keep you warm on the coldest of days.
          Our tops are knit to look great both on and off the mountain, while our
          bottoms are built to fit perfectly under your ski pants.
        </p>
      </div>

      {/* Baselayers */}
      <div className="bag-container" ref={topRef}>
        <div className="bag-card"><Baselayer /></div>
        <div className="bag-card"><Baselayer1 /></div>
        <div className="bag-card"><Baselayer2 /></div>
      </div>

      {/* Knit Tops */}
      <div className="bag-container" ref={bagRef}>
        <div className="bag-card"><Top /></div>
        <div className="bag-card"><Top1 /></div>
        <div className="bag-card"><Top2 /></div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}