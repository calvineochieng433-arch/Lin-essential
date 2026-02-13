import { useState, useRef, useEffect } from "react";
import "./Styles.css";

const faqs = [
  {
    question: "Features",
    answer: "Housing connectors are compatible with P1, P2 and P1 Mini handles. Made from durable nylon and TPU materials for long-lasting use. Lightweight design to avoid adding extra weight to your poles. Easy to install and remove for convenience."
  },
  {
    question: "Tech specs",
    answer: "- Weight: Approximately 20 grams per strap.- Materials: Nylon, TPU, Neodymium magnets.- Compatibility: Designed for Yardsale Linessentials ski poles (P1, P2, P1 Mini).- Color Options: Available in Powder Day and Doubleblack."
  },
  {
    question: "Care instructions",
    answer: "Clean with a damp cloth and mild soap. Do not machine wash or dry. Store in a cool, dry place. Avoid exposure to extreme heat or cold. Keep away from strong magnetic fields. Check magnets regularly for debris and clean as needed."
  },
    {
    question: "Warranty",
    answer: "We offer a one-year limited warranty on all our Magstraps against manufacturing defects. If you experience any issues with your Magstraps within this period, please contact our customer service team at support@linessential.day."
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
