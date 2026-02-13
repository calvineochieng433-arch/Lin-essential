import "./Styles.css";
import { useState } from "react";

export default function Ski1() {
  const SkiData = {
    Bluebird: [
      "https://media.yardsale.day/images/8l1z5dyl/production/ed5485f07f587d242a250f52ba21adcdcd9140e2-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/c326c925f828a741cfd51e36c720d2abdd9ecb8f-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/91fc6ddc192cb0b577b1e8a4427a5c38c4a11205-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/50a471bfae777bf169ea2b089d7d1ed8ad90aa67-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/412bf034f50ec64c6d564eb53d9de6f19c508763-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Butter: [
      "https://media.yardsale.day/images/8l1z5dyl/production/90d3409f4e83c270536f31dd4bf5eeed25d0c3c0-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/c71e7bc3d8f74a2586abbd74352bf6fcf45ba57f-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/4fddabf46e227cc3eaa6368a9b432baff5ec9594-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/79aa6c9e115e97f1851c96f9fb02471cfcca329f-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/1a7cf8e0ca66a7d3fcf8c9c38769a103382b3135-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    DoubleBlack: [
      "https://media.yardsale.day/images/8l1z5dyl/production/21515c6be825e45b82956a8deaea26ba76190574-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/2e32b2c9c567ceee263943618607041dbbfce32a-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/ec8584765e54ce0512b7be6532d889ee4243e32c-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/cda8cfa8b4a696daa74676238d6c7c1f5fa7f03d-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/0e5a6378e71e7395d4f93c0b69d37de08c227e01-4000x4000.png?rect=400,0,3200,4000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const skiColor = {
    Bluebird: "#4a90e2",
    Butter: "#f5d76e",
    DoubleBlack: "#4a4a4a"
  };

  const [selectedColor, setSelectedColor] = useState("Bluebird");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % SkiData[selectedColor].length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + SkiData[selectedColor].length) %
        SkiData[selectedColor].length
    );

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0);
  };

  return (
    <div className="ski-container">
      <div className="product-card">
        <div className="image-container">
          <button className="arrow left" onClick={prevImage}>
            &lt;
          </button>

          <img src={SkiData[selectedColor][currentIndex]} alt="Skis" />

          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="details">
          <h2>P2 Hybrid Poles</h2>
          <p>Longer grip backcountry poles for the more adventurous skiers</p>
          <span className="price">$169.00</span>
        </div>

        <div className="colors">
          {Object.keys(skiColor).map((color) => (
            <div
              key={color}
              className={`color-swatch ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: skiColor[color] }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
