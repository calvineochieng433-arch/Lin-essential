import { useState } from "react";
import "./Styles.css";

export default function Bag1() {
  const bagData = {
    brown: [
      "https://media.yardsale.day/images/8l1z5dyl/production/0ff4d71da2baa43bcf7d6967a26e7e9942eed8a4-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/0ff4d71da2baa43bcf7d6967a26e7e9942eed8a4-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/aedb7ec238fabd04f5ea4e66312097bc7db0608f-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/9fce86941744094777c912da2a48426e083d0413-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    grey: [
      "https://media.yardsale.day/images/8l1z5dyl/production/683bfa4b78572bb9942ff42443f667aa69e54b68-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/b1b0c7da462976b75927866f9c8e81411d60643d-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/a111a55cfa40eed46ccf610bae42b8c5f4038ad0-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/191af9ed4aa7252213180b4212dccc27f37a9a61-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    yellow: [
      "https://media.yardsale.day/images/8l1z5dyl/production/2f730258516a748e4029102881ac7c4aaf7b4a80-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/8845010c33603567b8626baa579d7e9ccb9fe9ea-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/047634adf564177a41aeb1f4c7f39c449993ea6d-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/2abd91b19afee4a2e49baf6205520187acb36c7d-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ],
    black: [
      "https://media.yardsale.day/images/8l1z5dyl/production/18e093047d52aeaec8921c61c5c6d68836e7725f-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/26e7d7549e8ba1d98b201f3df49a0cbed5d198dd-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/80aa0e82e54a30c3f8dd73eef030e429f5ea09a0-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format",
      "https://media.yardsale.day/images/8l1z5dyl/production/2cca2b9343892798915a7adaef8371d79dd04352-3000x3000.png?rect=300,0,2400,3000&w=1024&h=1280&fm=webp&q=75&fit=crop&auto=format"
    ]
  };

  const colorCodes = {
    brown: "#745439",
    grey: "#EAE7E1",
    yellow: "#EDDB94",
    black: "#292929"
  };

  const [selectedColor, setSelectedColor] = useState("black");
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
          <h2>The Day Bag</h2>
          <p>
            Our purpose-built, waterproof tote to stay organized on and off the
            mountain
          </p>
          <div className="price">$180.00</div>
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
