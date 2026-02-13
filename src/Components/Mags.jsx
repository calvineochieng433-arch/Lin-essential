import { useState } from "react";
import "./Styles.css";

export default function Mags() {
  const bagData = {
    PowderDay: [
        "https://media.yardsale.day/images/8l1z5dyl/production/7f466bd589b3bcbac7d657e7ff340a5a9980505a-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/15740487171ac2e7584e43dfff1b7f923e2b54a3-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/c129d717573db88f574bb925caa697777e9a2caa-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    Doubleblack: [
      "https://media.yardsale.day/images/8l1z5dyl/production/f953730e68ea39f78b507a22df327646bc35dcc9-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/c8ff1d8e459f00749ea85102685b06e1eca1f488-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/25bebaf30054133f7e1f0dd0731790014c0a6923-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
  };

  const colorCodes = {
    PowderDay: "#EAE7E1",
    Doubleblack: "#292929",
  };

  const [selectedColor, setSelectedColor] = useState("PowderDay");
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
          <h2>MagStrap™ System</h2>
          <p>
            The MagStrap™ System is the ultimate ski carrying solution, designed to
          </p>
          <div className="price">$60.00</div>
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
