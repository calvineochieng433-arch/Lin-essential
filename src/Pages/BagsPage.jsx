import "./Pages.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation from "../Components/Navigation.jsx";
import Bags from "../Components/Bags.jsx";
import Bag3 from "../Components/Bag3.jsx";
import Bag1 from "../Components/Bag1.jsx";
import FAQ1 from "../Components/FAQ1.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import Offer from "../UI/Offer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function BagsPage() {
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
        <h1>Day Bags</h1>
        <p>
          The new WFL ("work-from-lodge") essential. 100% waterproof totes with
          pockets for everything, even a laptop. Perfect for days on the mountain
          or wherever your travels may take you.
        </p>
      </div>

      {/* Bags */}
      <div className="bag-container" ref={bagRef}>
        <div className="bag-card">
          <Bags />
        </div>
        <div className="bag-card">
          <Bag3 />
        </div>
        <div className="bag-card">
          <Bag1 />
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
