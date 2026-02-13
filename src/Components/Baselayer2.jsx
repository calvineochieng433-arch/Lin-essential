import { useState } from "react";
import "./Styles.css";

export default function Bag3() {
  const bagData = {
    DarkChocolate: [
        "https://media.yardsale.day/images/8l1z5dyl/production/cb33b21fb4fdf2aa2d50188a2ce775bada5904c7-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/0e30cbbd63bdc1450fda44359f84d24b72020d7c-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/511f9de507ca5332c20d30901b16fc150c0226db-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"  
    ],
    ForestGreen: [
        "https://media.yardsale.day/images/8l1z5dyl/production/bd07fba071378f618f973a5a77bf67a22af47e3d-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/688dec22752b8a3231afb7ea440ad09a34cc10b7-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/b87512285b8ad251a91753343eb4a8ea74f29dec-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    Midnight: [
        "https://media.yardsale.day/images/8l1z5dyl/production/ba457523ed90cafbb0b3f380c03641215fb8326e-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/6d9ab7f9f02d694f15394ef319b44943eb1dcb64-1080x1350.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
        "https://media.yardsale.day/images/8l1z5dyl/production/af7912d555d094ab308df6503af924df344d7686-2000x2500.png?w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const colorCodes = {
    DarkChocolate: "#4B2E0F",
    ForestGreen: "#2E4D2B",
    Midnight: "#1A1A1A"
  };

  const [selectedColor, setSelectedColor] = useState("Midnight");
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
          <h2>Men's 3/4 Baselayer Bottoms</h2>
          <p>
            Merino Wool blend
          </p>
          <div className="price">$99.00</div>
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
