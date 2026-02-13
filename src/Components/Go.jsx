import { useState } from "react";
import "./Styles.css";

export default function Bag1() {
  const bagData = {
    PowderDay: [
        "https://media.yardsale.day/images/8l1z5dyl/production/fe412f2c7aa83051dd2a4f71927ba4d4b698427f-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/31b8c7a846605ade64a6912f6da1ad11f09520df-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/a2e9b65ae1e4dadc27e7da453511ca4b15784d77-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/7f894374284d0db8efe17b769db7d8f0ce9bbb69-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
  };

  const colorCodes = {
    PowderDay: "#EAE7E1",
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
          <h2>GoPro® Mount</h2>
          <p>
            The GoPro® Mount is the perfect way to capture your adventures on the slopes.
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
