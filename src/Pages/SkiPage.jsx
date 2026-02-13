import "./Pages.css";
import Navigation from "../Components/Navigation.jsx";
import Skis from "../Components/Skis.jsx";
import Ski1 from "../Components/Ski1.jsx";
import Ski2 from "../Components/Ski2.jsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkiJournal from "../Components/SkiJournal.jsx";
import Card from "../Components/Card.jsx";
import CTA from "../Components/CTA.jsx";
import Footer from "../Components/Footer.jsx";
import FAQ2 from "../Components/FAQ2.jsx";
import Offer from "../UI/Offer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function SkiPage() {
  const skiGridRef = useRef(null);

  useEffect(() => {
    const cards = skiGridRef.current.querySelectorAll(".ski-card");

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
          trigger: skiGridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="ski-page">
        <Navigation />
        <Offer />
        <picture className="ski-image">
          <img
            src="https://media.yardsale.day/images/8l1z5dyl/production/9cb4e7e1de2ab5a2eb6d8c5adcf0990cc78b748c-2400x3600.jpg?rect=0,1125,2400,1350&w=1920&h=1080&fm=webp&q=75&fit=crop&auto=format"
            alt="Ski image"
          />
        </picture>

        <div className="ski-content">
          <span>Equipment</span>
          <h1>Ski Page</h1>
        </div>
      </section>

      <h2 className="ski-editorial">
        Award winning ski poles{" "}
        <span>
          <img
            src="https://media.yardsale.day/images/8l1z5dyl/production/187dae47625c2aeb8bfa84fde099f1048f67501a-4000x4000.png?w=150&h=150&fm=webp&q=75&fit=crop&auto=format"
            alt="ski-pole"
          />
        </span>{" "}
        for double blacks{" "}
        <span>
          <img
            src="https://media.yardsale.day/images/8l1z5dyl/production/d36e445ec638e716d0d361b0b4403c61e37281fb-3089x2048.jpg?rect=521,0,2048,2048&w=150&h=150&fm=webp&q=75&fit=crop&auto=format"
            alt="double black"
          />
        </span>{" "}
        and bunny slopes{" "}
        <span>
          <img
            src="https://media.yardsale.day/images/8l1z5dyl/production/3f53468977484982fb43862b6b2e90dc7f0f243b-2048x3089.jpg?rect=0,521,2048,2048&w=200&h=200&fm=webp&q=75&fit=crop&auto=format"
            alt="bunny slope"
          />
        </span>
      </h2>
      <div className="ski-sales">
        <p className="ski-intro">
          With colors you can mix-and-match and embedded magnets to make carrying
          them a breeze, once you try the click of Yardsale poles, you’ll never go
          back.
        </p>
        <div className="ski-grid" ref={skiGridRef}>
          <div className="ski-card">
            <Skis />
          </div>
          <div className="ski-card">
            <Ski1 />
          </div>
          <div className="ski-card">
            <Ski2 />
          </div>
        </div>
      </div>
      <SkiJournal />
    <img
        src="https://media.yardsale.day/images/8l1z5dyl/production/a44e79c5ad58b7ebb5929854c0516b789747e0e9-2428x1616.png?rect=0,125,2428,1366&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format"
        alt="Image"
        style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            display: "block",
        }}
    />
    <Card />
    <div className="accordion-wrapper">
      <h1>FAQ</h1>
      <FAQ2 />
    </div>
    <CTA />
    <Footer />
    </>
  );
}
