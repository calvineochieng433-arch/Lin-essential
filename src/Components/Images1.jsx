import "./Styles.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {Link} from "react-router-dom";

export default function Images() {
  const sectionRef = useRef(null);

  const features = [
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/2829633fa576a19ab62defe4c75b0f9b75ce4a59-1024x1536.jpg?rect=0,128,1024,1280&w=640&h=800&fm=webp&q=75&fit=crop&auto=format",
      title: "DarkBrown Sport Coat",
      link: "/the-sport-coat",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/469676472c6bcd5d1e39b113d6aab19f94e9c1e1-2870x1613.jpg?rect=1,0,2868,1613&w=768&h=432&fm=webp&q=75&fit=crop&auto=format",
      title: "CharcoalBlack Sport Coat",
      link: "/the-sport-coat",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const buttons = section.querySelectorAll(".feature-btn");

    buttons.forEach((btn) => {
      const defaultText = btn.querySelector(".btn-text");
      const hoverText = btn.querySelector(".btn-hover-text");

      // Initial state
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
    <section className="feature-section" ref={sectionRef}>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            className="feature-card"
            style={{ backgroundImage: `url(${feature.Image})` }}
          >
            <div className="feature-overlay">
              <h3>{feature.title}</h3>

              <Link className="feature-btn" to={feature.link}>
                <span className="btn-text">Shop</span>
                <span className="btn-hover-text">Discover</span>
              </Link>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
