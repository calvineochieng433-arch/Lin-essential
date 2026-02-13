import "./Pages.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "../Components/Navigation.jsx";
import Mags from "../Components/Mags.jsx";
import Go from "../Components/Go.jsx";
import FAQ1 from "../Components/FAQ1.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import Baskets from "../Components/Baskets.jsx";
import Ski1 from "../Components/Ski1.jsx";
import Ski2 from "../Components/Ski2.jsx";
import Bags from "../Components/Bags.jsx";
import Offer from "../UI/Offer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function ExtrasPage() {
  const bagRef1 = useRef(null);
  const bagRef2 = useRef(null);

  useEffect(() => {
    const animateCards = (container) => {
      if (!container) return;

      const cards = container.querySelectorAll(".bag-card");

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
            trigger: container,
            start: "top 80%",
          },
        }
      );
    };

    animateCards(bagRef1.current);
    animateCards(bagRef2.current);

    // CTA hover animation (unchanged)
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
        <h1>Extras</h1>
        <p>
          Looking for a replacement basket or to stock up on extra parts in
          additional colors? You're in the right place.
        </p>
      </div>

      {/* Extras 1 */}
      <div className="bag-container" ref={bagRef1}>
        <div className="bag-card">
          <Mags />
        </div>
        <div className="bag-card">
          <Go />
        </div>
        <div className="bag-card">
          <Baskets />
        </div>
      </div>

      {/* Extras 2 */}
      <div
        className="extras-2"
        ref={bagRef2}
        style={{ marginTop: "2.5rem" }}
      >
        <div className="bag-card">
          <Ski1 />
        </div>
        <div className="bag-card">
          <Ski2 />
        </div>
        <div className="bag-card">
          <Bags />
        </div>
      </div>

      {/* FAQ */}
      <div className="accordion-wrapper">
        <h1>FAQ</h1>
        <FAQ1 />
      </div>

      {/* CTA */}
      <div className="bag-cta">
        <img
          src="https://media.yardsale.day/images/8l1z5dyl/production/1a623271c13a58470b38624ccd68fa0f03ee37e4-2400x3600.jpg?fp-x=0.5&fp-y=0.4953907773162668&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format"
          alt="Day Bag CTA"
        />

        <div className="bag-cta-text">
          <h1>Ready to find your perfect day bag?</h1>

          <a className="shop-now-button" href="#ShopBags">
            <span className="btn-text">Shop Now</span>
            <span className="btn-hover-text">Discover Bags</span>
          </a>
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
}