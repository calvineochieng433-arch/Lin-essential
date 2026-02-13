import "./Pages.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sweaters from "../Components/Sweaters";
import Sweaters1 from "../Components/Sweaters1";
import Navigation from "../Components/Navigation";
import Offer from "../UI/Offer";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SweatersPage() {
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
      <section className="hero">
        <h1>Men&apos;s Dinner Sweater</h1>
        <p>
          Our coziest piece for nights out in the mountains or even back home.
          Knit with extra soft Peruvian alpaca wool.
        </p>
      </section>

      {/* Sweaters */}
      <div className="coats" ref={coatRef}>
        <div className="coat-card">
          <Sweaters />
        </div>
        <div className="coat-card">
          <Sweaters1 />
        </div>
      </div>

      <CTA />
      <Footer />

      {/* Styled JSX */}
      <style jsx>{`
        .hero {
          margin-top: 6rem;
          padding: 0 4rem;
          text-align: left;
        }

        h1 {
          font-family: "IM Fell French Canon", serif;
          font-size: 4rem;
          margin-top: 2rem;
        }

        p {
          margin-top: 0.5rem;
          max-width: 620px;
          line-height: 1.6;
          letter-spacing: 0.02em;
          font-size: 1rem;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          color: #444;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero {
            padding: 0 2rem;
          }

          h1 {
            font-size: 2.4rem;
          }

          p {
            max-width: 520px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero {
            padding: 0 1.5rem;
            margin-top: 5rem;
          }

          h1 {
            font-size: 2rem;
            margin-top: 1.5rem;
          }

          p {
            font-size: 0.95rem;
            max-width: 100%;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          h1 {
            font-size: 1.7rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}