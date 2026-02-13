import "./Styles.css";
import { useState } from "react";

export default function Baskets() {
  const basketData = {
    LightBeige: [
      "https://media.yardsale.day/images/8l1z5dyl/production/65da120f7d933329657fcf9f922bdb3ed373894f-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    SageGreen: [
      "https://media.yardsale.day/images/8l1z5dyl/production/42e39d006f6fac1dd83f20efed448159c5304471-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    CoralRed: [
      "https://media.yardsale.day/images/8l1z5dyl/production/e3f81a6e8a1d77d44238a0c2c0a952ab8196f399-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    MediumBlue: [
      "https://media.yardsale.day/images/8l1z5dyl/production/3bc3c0ab4970012e74cd88038386da3055a65e84-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    Mauve: [
      "https://media.yardsale.day/images/8l1z5dyl/production/b9299c78bbe87a3a589c1bd24e1e38c93dbe3d3e-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    DarkGray: [
      "https://media.yardsale.day/images/8l1z5dyl/production/fa46b40ab70b56a9d099f906f394e1dfe027de6b-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    Mustard: [
      "https://media.yardsale.day/images/8l1z5dyl/production/8b8a6b9566b313b1c81373e25167cb232090975b-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ],
    Pink: [
      "https://media.yardsale.day/images/8l1z5dyl/production/5e1b189094be3e64a3010a75cf46919494e30fa0-4000x4000.png?w=1024&h=1024&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const basketColor = {
    LightBeige: "#f2f0e6ff",
    SageGreen: "#69806d",
    CoralRed: "#d85443",
    MediumBlue: "#487ea2",
    Mauve: "#ad89b5",
    DarkGray: "#292929",
    Mustard: "#EDDB94",
    Pink: "#E27EB4",
  };

  const [selectedColor, setSelectedColor] = useState("CoralRed");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = basketData[selectedColor] || [];

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0);
  };

  return (
    <div className="basket-container">
      <div className="product-card">
        <div className="image-container">

          {images.length > 0 && (
            <img src={images[currentIndex]} alt="Powder Basket" />
          )}

        </div>

        <div className="details">
          <h2>Powder Baskets</h2>
          <p>Large basket for deeper snow</p>
          <span className="price">$30.00</span>
        </div>

        <div className="colors">
          {Object.keys(basketColor).map((color) => (
            <div
              key={color}
              className={`color-swatch ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: basketColor[color] }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
