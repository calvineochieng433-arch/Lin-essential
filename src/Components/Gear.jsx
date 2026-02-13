import { useRef, useState, useEffect } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

import Cursor from "../UI/Cursor";
import SkiPoles from "../UI/SkiPoles1";
import Bags from "../UI/Bags1";
import Apparel from "../UI/Apparel";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gear() {
  const Gears = [
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/097b959df33cb3f558a4f466e35c44933f5be08e-980x1458.png?fp-x=0.5380650277557494&fp-y=0.522479954180985&w=768&h=960&fm=webp&q=75&fit=crop&auto=format",
      title: "Ski poles that don't suck",
      subtitle: "Our award-winning magnetic poles for double blacks and bunny slopes.",
      link: "/ski-poles",
      component: SkiPoles,
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/267023359948d4dd59bafa2bc83ee0c1fc0e5e50-2300x3411.jpg?rect=0,269,2300,2875&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      title: "Your new do-it-all bag",
      subtitle:
        "Rugged enough for the mountains, but sleek enough for your daily commute, trips to the beach, and everywhere else you go.",
      link: "/backpacks",
      component: Bags,
    },
    {
      Image:
        "https://media.yardsale.day/images/8l1z5dyl/production/5143ae6cc774510b4c3c9499004b7f0417820fe4-1024x1536.jpg?rect=0,128,1024,1280&w=768&h=960&fm=webp&q=75&fit=crop&auto=format",
      title: "Apparel that takes you from the mountain to the lodge",
      subtitle: "Cozy merino wool layers for cold days outside",
      link: "/apparel",
      component: Apparel,
    },
  ];

  const gridRef = useRef(null);

  // Animate cards when section enters viewport
  useEffect(() => {
    const cards = gridRef.current.querySelectorAll(".gear-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="gears-section">
      <div className="gear-intro">
        <h2>All-new gear for winter adventures</h2>
      </div>

      <div className="gears-grid" ref={gridRef}>
        {Gears.map((gear, index) => (
          <GearCard key={index} gear={gear} />
        ))}
      </div>
    </section>
  );
}

// ------------------------
// GearCard with smooth cursor and clamp
// ------------------------
function GearCard({ gear }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 }); // target mouse
  const [animatedPos, setAnimatedPos] = useState({ x: 0, y: 0 }); // smooth cursor

  const Component = gear.component;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const compWidth = 120;
    const compHeight = 50;

    const x = Math.min(Math.max(e.clientX - rect.left, compWidth / 2), rect.width - compWidth / 2);
    const y = Math.min(Math.max(e.clientY - rect.top, compHeight / 2), rect.height - compHeight / 2);

    setPos({ x, y });
  };

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAnimatedPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    if (hovered) {
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [hovered, pos]);

  return (
    <div
      ref={cardRef}
      className="gear-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="gear-card-inner">
        <div className="gear-image">
          <img src={gear.Image} alt={gear.title} />
        </div>

        <div className="gear-content">
          <h3>{gear.title}</h3>
          <p>{gear.subtitle}</p>
          <Link to={gear.link} className="gear-link">
            Shop now
          </Link>
        </div>
      </div>

      {hovered && Component && (
        <Cursor x={animatedPos.x} y={animatedPos.y}>
          <Component />
        </Cursor>
      )}
    </div>
  );
}
