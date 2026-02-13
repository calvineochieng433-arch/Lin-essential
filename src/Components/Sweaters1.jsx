import { useState } from "react";
import "./Styles.css";

export default function Bag3() {
  const bagData = {
    Moss: [
        "https://media.yardsale.day/images/8l1z5dyl/production/95d6a5845ee7ef3f46a35e12324bd7c1e1573ec0-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/c04bc1b6fe08bffb890174a67f7446ded568660c-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/fd62cd02c0128662dee4ce2a676750e22fd94966-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    DarkChocolate: [
        "https://media.yardsale.day/images/8l1z5dyl/production/41a15c4cafd1e6dea9d833cfef9e7edff18029f1-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/154bcdcd06d61014509487d196ed2a3ae6fdbde5-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/5f7c3f4a44c4955df9b41eb9262922ba60fd992a-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
  };

  const colorCodes = {
    DarkChocolate: "#4B2E0F",
    Moss: "#8A9A5B",
  };

  const [selectedColor, setSelectedColor] = useState("DarkChocolate");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % bagData[selectedColor].length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + bagData[selectedColor].length) % bagData[selectedColor].length
    );
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0); // reset to default image for that color
  };

  return (
    <div className="bags-container">
      <div className="product-card">
        <div className="image-container">
          <button className="arrow left" onClick={prevImage}>
            &lt;
          </button>
          <img
            src={bagData[selectedColor][currentIndex]}
            alt={`${selectedColor} bag`}
          />
          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="details">
          <h2>Men's Dinner Sweater</h2>
          <p>
            Peruvian alpaca wool
          </p>
          <div className="price">$165.00</div>
        </div>

        <div className="colors">
          {Object.keys(colorCodes).map((color) => (
            <div
              key={color}
              className={`color-swatch ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: colorCodes[color] }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
