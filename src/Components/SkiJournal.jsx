import "./Styles.css";
import { useRef } from "react";

const skiJournalData = [
  {
    Image: "https://media.yardsale.day/images/8l1z5dyl/production/50ef1d0cb8f0e8edc7e82964926cad95310dfdef-2000x3000.jpg?rect=0,250,2000,2500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    title: "Embedded Magnets for Easy Carrying",
    subtitle:
      "Just click and go. Our proprietary magnetic system in the handles and baskets make carrying your gear, answering a call, or just freeing up a hand a breeze.",
  },
  {
    Image: "https://media.yardsale.day/images/8l1z5dyl/production/87ecfac6c6e82b61e09a10d6e50164ba210eaff3-2000x3000.jpg?rect=0,250,2000,2500&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    title: "Sleek Design",
    subtitle:
      "Make 'em yours. With our fully modular system, you can choose our eye-catching monochrome poles, or pick different colors for your shafts, handles, baskets, and straps.",
  },
  {
    Image: "https://media.yardsale.day/images/8l1z5dyl/production/ffa2cd3c1d6da5e87e0cdd04e26aa393d1e00f86-992x1450.png?rect=0,105,992,1240&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    title: "Modular Accessories",
    subtitle:
      "Trick out your poles with our Powder Baskets, MagStrap, and GoPro Mount. All of our accessories are reverse compatible with every Yardsale pole model.",
  },
  {
    Image: "https://media.yardsale.day/images/8l1z5dyl/production/e85d5cf63b42dee3e2d633bbf2860c8cc6ae19c0-976x1458.png?rect=0,119,976,1220&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    title: "Lifetime Guarantee",
    subtitle:
      "Shafts are backed by our lifetime guarantee. If you ever bend or break them, just send us the story of how it happened and we'll replace them for free.",
  },
];

export default function Journal() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const cardWidth = 656; // adjust based on card + gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="journal-section">
      <h2 className="journal-heading" style={{ marginBottom: "2.5rem" }}>
        Features to rave about on the lift
      </h2>

      {/* Journal Buttons */}
      <div className="journal-arrows">
        <button onClick={() => scroll("left")}>‹</button>
        <button onClick={() => scroll("right")}>›</button>
      </div>

      {/* Carousel */}
      <div className="journal-carousel" ref={carouselRef}>
        {skiJournalData.map((item, index) => (
          <div className="journal-card" key={index}>
            <div className="journal-image">
              <img src={item.Image} alt={item.title} />
            </div>
            <div className="journal-content" style={{ marginTop: "15px" }}>
              <h3>{item.title}</h3>
              <p style={{ paddingTop: "10px" }}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
