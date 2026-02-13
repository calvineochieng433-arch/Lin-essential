import { useState } from "react";
import "./Styles.css";

export default function Bag3() {
  const bagData = {
    DarkChocolate: [
        "https://media.yardsale.day/images/8l1z5dyl/production/a8c642f07df4a5881db44a609ddc9ec3f9bc65d5-2400x3000.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/9bc1d05f35ea54d307cb66a328c876ab24fa26cf-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/f34f346ac689988c419a13d0ef799c70a912c055-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format" 
    ],
    ForestGreen: [
        "https://media.yardsale.day/images/8l1z5dyl/production/755c1af8cdc90122b9b253f670e59820e314cdb1-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/7ffc26066c52ce99b7294616574ca4757ed60a49-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/b94f685e7c9d1822439aec89d20e4dce31153866-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Midnight: [
        "https://media.yardsale.day/images/8l1z5dyl/production/9f68eaf4706edbd0f33099fcefe7bf80eadeb041-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/f9c88d632027b2e5fc5161cd692ea451c2b69179-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/186bbbe1cf935708d5b719a23d3fb96026125287-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const colorCodes = {
    DarkChocolate: "#4B2E0F",
    ForestGreen: "#2E4D2B",
    Midnight: "#1A1A1A"
  };

  const [selectedColor, setSelectedColor] = useState("ForestGreen");
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
          <h2>Men's Knit Baselayer Top</h2>
          <p>
            100% merino wool
          </p>
          <div className="price">$129.00</div>
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
