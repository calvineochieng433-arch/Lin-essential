import { useState } from "react";
import "./Styles.css";

export default function Bags() {
  const coatData = {
    DarkBrown: [
        "https://media.yardsale.day/images/8l1z5dyl/production/32deb7d45d8e670ab73483d3547a2f890f7bde9b-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/32deb7d45d8e670ab73483d3547a2f890f7bde9b-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/84df08d07224c2414c8427ceed8cd1fedfdc31db-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/b95f37be1475d64190384fdb3c94b019f6d74768-2500x3125.jpg?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    ],
    CharcoalBlack: [
        "https://media.yardsale.day/images/8l1z5dyl/production/7a37686570e6e7a5857149f13b2fed700abe2c82-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/a958a5fea684a33c84c905beb34931d6ea7dd80d-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/5cfb7fd277eb2273b360fb171f8c61fbc8dcbb9a-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/dfc48c6c6553ec98898874963adab968f16be7e6-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
    ]
  };

  const CoatColors = {
    DarkBrown: "#40321d",
    CharcoalBlack: "#292929"
  };

  const [selectedColor, setSelectedColor] = useState("CharcoalBlack");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % coatData[selectedColor].length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + coatData[selectedColor].length) % coatData[selectedColor].length
    );
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0); // reset to default image for that color
  };

  return (
    <div className="coat-container">
      <div className="product-card">
        <div className="image-container">
          <button className="arrow left" onClick={prevImage}>
            &lt;
          </button>
          <img
            src={coatData[selectedColor][currentIndex]}
            alt={`${selectedColor} bag`}
          />
          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="details">
          <h2>Men's Sport Coat</h2>
          <p>
            Merino blend midlayer
          </p>
          <div className="price">$289.00</div>
        </div>

        <div className="colors">
          {Object.keys(CoatColors).map((color) => (
            <div
              key={color}
              className={`color-swatch ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: CoatColors[color] }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
