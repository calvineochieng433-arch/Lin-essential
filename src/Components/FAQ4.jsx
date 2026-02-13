import { useState, useRef, useEffect } from "react";
import "./StyleS.css";

const faqs = [
  {
    question: "Do powder baskets fit with P1 Poles?",
    answer: "They sure do! All of our extra parts are reverse compatible with all of our pole models."
  },
  {
    question: "Can I buy just one handle?",
    answer: "Yes! We understand that sometimes you just need a replacement part. You can purchase individual handles, straps, or baskets from our online store."
  },
  {
    question: "Can I put P2 handles on my P1 Poles?",
    answer: "No, the P2 handles are not compatible with the P1 poles. The P1 and P2 models have different attachment mechanisms, so their handles cannot be interchanged."
  },
    {
    question: "Does MagStrap work with P1 and P1 Mini?",
    answer: "It sure does! All of our components are reverse compatible with all Yardsale poles. MagStraps are designed to work seamlessly with P1, P2, and P1 Mini handles, providing a secure and convenient attachment solution for all our pole models."
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
