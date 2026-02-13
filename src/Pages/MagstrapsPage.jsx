import "./Pages.css";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navigation from "../Components/Navigation.jsx";
import FAQ3 from "../Components/FAQ3.jsx";
import Images from "../Components/Images.jsx";
import Explore from "../Components/Explore.jsx";
import Card from "../Components/Card.jsx";
import Gear from "../Components/Gear.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import Offer from "../UI/Offer.jsx";

export default function MagstrapsPage() {
  const magstrapData = {
    PowderDay: [
      "https://media.yardsale.day/images/8l1z5dyl/production/7f466bd589b3bcbac7d657e7ff340a5a9980505a-4000x4000.png?w=1024",
      "https://media.yardsale.day/images/8l1z5dyl/production/15740487171ac2e7584e43dfff1b7f923e2b54a3-4000x4000.png?w=1024",
      "https://media.yardsale.day/images/8l1z5dyl/production/c129d717573db88f574bb925caa697777e9a2caa-4000x4000.png?w=1024",
    ],
    Doubleblack: [
      "https://media.yardsale.day/images/8l1z5dyl/production/f953730e68ea39f78b507a22df327646bc35dcc9-4000x4000.png?w=1024",
      "https://media.yardsale.day/images/8l1z5dyl/production/c8ff1d8e459f00749ea85102685b06e1eca1f488-4000x4000.png?w=1024",
      "https://media.yardsale.day/images/8l1z5dyl/production/25bebaf30054133f7e1f0dd0731790014c0a6923-4000x4000.png?w=1024",
    ],
  };

  const magstrapColors = {
    PowderDay: "#EAE7E1",
    Doubleblack: "#292929",
  };

  const [selectedColor, setSelectedColor] = useState("PowderDay");
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonRef = useRef(null);

  // Hero-style button animation
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const defaultText = btn.querySelector(".btn-text");
    const hoverText = btn.querySelector(".btn-hover-text");

    // Initial state
    gsap.set(defaultText, { yPercent: 0, opacity: 1 });
    gsap.set(hoverText, { yPercent: 30, opacity: 0 });

    const onEnter = () => {
      gsap.to(defaultText, { yPercent: -30, opacity: 0, duration: 0.2 });
      gsap.to(hoverText, { yPercent: 0, opacity: 1, duration: 0.2 });
    };

    const onLeave = () => {
      gsap.to(hoverText, { yPercent: 30, opacity: 0, duration: 0.2 });
      gsap.to(defaultText, { yPercent: 0, opacity: 1, duration: 0.2 });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
    <Navigation />
    <Offer />
    
    <section className="magstrap-page">
      {/* LEFT — IMAGES */}
      <div className="magstrap-gallery">
        <img
          className="main-image"
          src={magstrapData[selectedColor][currentIndex]}
          alt={selectedColor}
        />

        <div className="thumbnail-row">
          {magstrapData[selectedColor].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setCurrentIndex(i)}
              className={i === currentIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — PRODUCT INFO */}
      <div className="magstrap-info">
        <h1>MagStrap™ System</h1>
        <p className="subtitle">
          Quick release magnetic straps
          <br />
          <span>Proprietary magnetic lock · Engineered for linessentials poles</span>

        </p>

        <p className="price">$60.00</p>

        {/* COLOR PICKER */}
        <div className="color-section">
          <p>{selectedColor}</p>
          <div className="color-dots">
            {Object.keys(magstrapColors).map((color) => (
              <button
                key={color}
                style={{ background: magstrapColors[color] }}
                className={selectedColor === color ? "active" : ""}
                onClick={() => {
                  setSelectedColor(color);
                  setCurrentIndex(0);
                }}
              />
            ))}
          </div>
        </div>

        {/* SIZE */}
        <div className="size-row">
          <button>S/M (Kids)</button>
          <button className="active">M/L (Adults)</button>
        </div>

        {/* CTA */}
        <button className="add-to-bag" ref={buttonRef}>
          <span className="btn-text">Add to Bag</span>
          <span className="btn-hover-text">Add to Bag</span>
        </button>

        <p className="return-note">
          Free & Easy Return or Exchange Coverage for $2.98
        </p>
      </div>
    </section>
          {/* FAQ */}
          <div className="accordion-wrapper" style={{marginBottom: '2.5rem'}}>
            <div className="accordion-texts">
              <h1>Just click in and go</h1>
              <p>With MagStrap, you can say goodbye to squeezing your fat gloves into your too-small straps. Adjust your straps to fit your glove once, then you’re all set. Just click your straps into your handles and start skiing.</p>
            </div>
            <FAQ3 />
          </div>
          <Images />
          <div className="mag-image">
            <img src="https://media.yardsale.day/images/8l1z5dyl/production/2cc09ca1fb639d6b33523c29a2e31f3e122307db-2220x1466.png?rect=0,109,2220,1249&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format" alt="" />
          </div>
          <Card />
          <Explore />
          <Gear />
          <CTA />
          <Footer />
    </>
  );
}
