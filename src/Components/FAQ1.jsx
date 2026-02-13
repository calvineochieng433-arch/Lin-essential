import { useState, useRef, useEffect } from "react";
import "./Styles.css";

const faqs = [
  {
    question: "Does The Day bag fit a 16 inch laptop?",
    answer: "Yes! All Day Bags fit laptops up to 16 inches."
  },
  {
    question: "Is the bag machine washable?",
    answer: "Yes - you can machine wash the Day Bag on cold with mild detergent. We recommend line or air drying."
  },
  {
    question: "Is it waterproof?",
    answer: "The Day Bag is waterproof thanks to our water-based DWR coating. This makes it snow-proof, rain-proof, and all around weather proof."
  },
  {
    question: "Can I fit my ski boots in it?",
    answer: "While we designed the bag to fit all of your other ski gear, you can fit your ski boots inside."
  }
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (openIndex === i) {
        const scrollHeight = el.scrollHeight;
        el.style.height = scrollHeight + "px";
      } else {
        el.style.height = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="accordion-container">
      {faqs.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-question" onClick={() => toggleIndex(index)}>
            <span>{item.question}</span>
            <span className="accordion-sign">{openIndex === index ? "-" : "+"}</span>
          </button>
          <div
            className="accordion-answer"
            ref={(el) => (answerRefs.current[index] = el)}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
