import { useState } from "react";
import "./Styles.css";

export default function Mavine2() {
  const bagData = {
    Moose: [
        "https://media.yardsale.day/images/8l1z5dyl/production/34199665e8dadd4ca5d83c8feb1f98d2da9ec48d-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    
    DarkChocolate: [
        "https://media.yardsale.day/images/8l1z5dyl/production/39c8e6e25164feac38651f44972333fa90b5396a-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Stone: [
        "https://media.yardsale.day/images/8l1z5dyl/production/97290aec7deb88e21947ad5fc99897d3a515a28d-2500x3125.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],

  };

  const colorCodes = {
    Moose: "#8B5E3C",
    DarkChocolate: "#5C4033",
    Stone: "#D2B48C",
  };

  const [selectedColor, setSelectedColor] = useState("Stone");
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
          <h2>Ribbed Merino Beanie</h2>
          <div className="price">$70.00</div>
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
