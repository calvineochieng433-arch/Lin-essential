import "./Styles.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Images() {
  const sectionRef = useRef(null);

  const features = [
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/b9ce4642b67a251ef58e8f5701bf9be7786b94bb-2000x3000.jpg?rect=0,250,2000,2500&w=640&h=800&fm=webp&q=75&fit=crop&auto=format",
      title: "Doubleblack™",
      link: "#Discover",
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/696f625b0aee7fb4f48774fbe656a9ab9510974b-2000x3000.jpg?rect=0,250,2000,2500&w=640&h=800&fm=webp&q=75&fit=crop&auto=format",
      title: "PowderDay™",
      link: "#Discover",
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

              <span className="feature-btn">
                <span className="btn-text">Shop</span>
                <span className="btn-hover-text">Discover</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
