import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Styles.css";

export default function CTA() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const defaultText = btn.querySelector(".btn-text");
    const hoverText = btn.querySelector(".btn-hover-text");

    // Initial state
    gsap.set(defaultText, { yPercent: 0, opacity: 1 });
    gsap.set(hoverText, { yPercent: 30, opacity: 0 });

    const onEnter = () => {
      gsap.killTweensOf([defaultText, hoverText]);
      gsap.to(defaultText, { yPercent: -30, opacity: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(hoverText, { yPercent: 0, opacity: 1, duration: 0.2, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.killTweensOf([defaultText, hoverText]);
      gsap.to(hoverText, { yPercent: 30, opacity: 0, duration: 0.2, ease: "power2.in" });
      gsap.to(defaultText, { yPercent: 0, opacity: 1, duration: 0.2, ease: "power2.in" });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
  }, []);

  return (
    <div className="cta-section">
      {/* Intro section */}
      <div className="cta-intro">
        <h2>Free Shipping & Extended Returns</h2>
        <p>
          Get free shipping for orders over $120. Plus, if you bought a gift for the skier in your life this holiday season, take until January 5th for returns or exchanges.
        </p>
      </div>

      {/* CTA button with arrow animation */}
      <div className="cta-btn">
        <a href="#cta-btn" ref={btnRef} className="cta-btn-link">
          <span className="btn-text">Drop your email for $15</span>
          <span className="btn-hover-text">Claim Your $15 Credit →</span>
        </a>
      </div>
    </div>
  );
}
