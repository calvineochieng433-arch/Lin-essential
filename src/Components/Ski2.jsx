import "./Styles.css";
import { useState } from "react";

export default function Ski2() {
  const Ski2Data = {
    Alpenglow: [
      "https://media.yardsale.day/images/8l1z5dyl/production/1b799fc206fc48cccf6cd1dce976199fae1b0728-4500x4500.png?rect=562,0,3376,4500&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/19dd399c84a5235b8cb2b9e371d09e7114b03f45-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/dec11b9ae459cacfd884c22fbda0a2925c57f944-4000x4000.png?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/d69b467a46494fdb3e2f6a76c3f62c80c721df3c-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/9e3391408c64aab07c4b3d5930160a1bfcfff32c-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format"
    ],
    Bluebird: [
      "https://media.yardsale.day/images/8l1z5dyl/production/929793c1ee755063eb4b84ce095423fc7112f696-4500x4500.png?rect=562,0,3376,4500&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/e0efc72e6fed8c275e675cf11aec77b07de48b83-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/e02ae2e0f83f873d42d64fcc3ab96e62cef223e9-4000x4000.png?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/8ad9706d3eda9fae0c3fa46a5aa8314e0600aa92-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/f9e7cccf305dcf731cc84a2bb1950bad779fe294-4000x4000.jpg?rect=500,0,3001,4000&w=1024&h=1365&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const skiColor = {
    Alpenglow: "#ad89b5",
    Bluebird: "#4a90e2"
  };

  const [selectedColor, setSelectedColor] = useState("Alpenglow");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % Ski2Data[selectedColor].length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Ski2Data[selectedColor].length) %
        Ski2Data[selectedColor].length
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

          <img src={Ski2Data[selectedColor][currentIndex]} alt="Skis" />

          <button className="arrow right" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="details">
          <h2>P1 Mini Poles</h2>
          <p>Lightweight touring poles built for long days in the mountains</p>
          <span className="price">$189.00</span>
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
