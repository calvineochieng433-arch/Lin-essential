import "./Pages.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Coat from "../Components/Coat";
import Coat1 from "../Components/Coat1";
import Navigation from "../Components/Navigation";
import Offer from "../UI/Offer";
import Solution1 from "../Components/Solution1";
import Images1 from "../Components/Images1";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function CoatPage() {
  const coatRef = useRef(null);

  // CTA hover animation (ALL buttons)
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

  // Coat cards scroll animation
  useEffect(() => {
    if (!coatRef.current) return;

    const coatCards = coatRef.current.querySelectorAll(".coat-card");

    gsap.fromTo(
      coatCards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coatRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <Navigation />
      <Offer />

      {/* Hero Section */}
      <section className="coats-section">
        <img
          src="https://media.yardsale.day/images/8l1z5dyl/production/c1eac8959bf53c85e5ab7049c747eb44e735b102-3600x2400.jpg?w=1024&fm=webp&q=75&fit=crop&auto=format"
          alt="Coat"
        />

        <div className="bag-cta-text">
          <h1>The Sport Coats</h1>
          <p>
            Discover our collection of premium sport coats designed for comfort
            and style.
          </p>

          <Link className="shop-now-button" to="/backpacks">
            <span className="btn-text">Shop Now</span>
            <span className="btn-hover-text">Discover Bags</span>
          </Link>
        </div>
      </section>

      <Solution1 />

      {/* Coats */}
      <div className="coats" ref={coatRef}>
        <div className="coat-card">
          <Coat />
        </div>
        <div className="coat-card">
          <Coat1 />
        </div>
      </div>

      <Images1 />

      {/* Bottom CTA */}
      <div className="bag-cta">
        <img
          src="https://media.yardsale.day/images/8l1z5dyl/production/469676472c6bcd5d1e39b113d6aab19f94e9c1e1-2870x1613.jpg?rect=1,0,2868,1613&w=768&h=432&fm=webp&q=75&fit=crop&auto=format"
          alt="Day Bag CTA"
        />

        <div className="bag-cta-text">
          <h1>Ready to find your perfect day bag?</h1>
          <p
            style={{
              fontFamily: "IM Fell French Canon",
              fontSize: "1.6rem",
              fontWeight: "normal",
            }}
          >
            The new “Work From Lodge” essential
          </p>

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