import "./Styles.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const heading = hero.querySelector(".hero-intro");
    const buttons = hero.querySelectorAll(".hero-button a");

    // =========================
    // Intro animation
    // =========================
    gsap.set(heading, { opacity: 0, y: 80 });
    gsap.set(buttons, { opacity: 0, y: 40 });

    gsap.to(heading, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to(buttons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power4.out",
    });

    // =========================
    // Y-axis hover animation
    // =========================
    buttons.forEach((btn) => {
      const defaultText = btn.querySelector(".btn-text");
      const hoverText = btn.querySelector(".btn-hover-text");

      // Initial states (small movement only)
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

      btn.addEventListener("mouseenter", onEnter);
      btn.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://media.yardsale.day/videos/f_webm,q_auto:best,vc_auto,c_fill,ar_1.7777777777777777,w_1440/videos/5742d7e40a4bfbd5222798f17571cef5d675b405.mp4"
          type="video/mp4"
        />
        Grandson lol.
      </video>

      <div className="hero-content">
        <h1 className="hero-intro">
          Clever gear for <br /> epic days outside
        </h1>

        <div className="hero-button">
          <Link to="/ski-poles" className="hero-btn1">
            <span className="btn-text">Shop Poles</span>
            <span className="btn-hover-text">Discover Poles</span>
          </Link>

          <Link to="/apparel" className="hero-btn2">
            <span className="btn-text">Shop Apparel</span>
            <span className="btn-hover-text">Discover Apparel</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
