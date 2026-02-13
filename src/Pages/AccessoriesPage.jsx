import "./Pages.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "../Components/Navigation.jsx";
import Mavine from "../Components/Mavine.jsx";
import Mavine1 from "../Components/Mavine1.jsx";
import Mavine2 from "../Components/Mavine2.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import Offer from "../UI/Offer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function AccessoriesPage() {
  const bagRef = useRef(null);

  useEffect(() => {
    const cards = bagRef.current.querySelectorAll(".bag-card");

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
          trigger: bagRef.current,
          start: "top 80%",
        },
      }
    );
    const ctaBtn = document.querySelector(".shop-now-button");
    if (!ctaBtn) return;

    const defaultText = ctaBtn.querySelector(".btn-text");
    const hoverText = ctaBtn.querySelector(".btn-hover-text");

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

    return () => {
      ctaBtn.removeEventListener("mouseenter", onEnter);
      ctaBtn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Offer />
      {/* Intro */}
      <div className="bagpage-intro">
        <h1>Accessories</h1>
        <p>
          Elevate your style with our curated collection of accessories. From sleek bags to versatile hats, our accessories are designed to complement your wardrobe and enhance your everyday look. Whether you're looking for a statement piece or a functional essential, our selection has something for everyone. Explore our range of accessories and find the perfect finishing touch for any outfit.
        </p>
      </div>

      {/* Bags */}
      <div className="bag-container" ref={bagRef}>
        <div className="bag-card">
          <Mavine />
        </div>
        <div className="bag-card">
          <Mavine1 />
        </div>
        <div className="bag-card">
          <Mavine2 />
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
