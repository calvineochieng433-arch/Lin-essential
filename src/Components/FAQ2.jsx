import { useState, useRef, useEffect } from "react";
import "./Styles.css";

const faqs = [
  {
    question: "How do I know what ski pole size I am?",
    answer: "Great question! The best way to figure out your ski pole size is to grab a tape measure in your hand, put your hand at a 90 degree angle and measure the distance from your hand to the ground. If you don’t have time for all that, we created a simple conversion chart based on your height on the pole configurator page. If you have any questions with sizing, don’t hesitate to reach out to us at hey@Linsale.day."
  },
  {
    question: "Why do your baskets look different?",
    answer: "They do look a little funny, don’t they? In order for our magnetic system to work so you can carry your poles more easily, we had to design our baskets to be the same width as our handles. Rest assured the basket shape will not affect your skiing."
  },
  {
    question: "Do I have to assemble the poles?",
    answer: "Nope! Your poles will come fully assembled and ready to hit the slopes right out of the box."
  },
  {
    question: "How do I assemble my poles?",
    answer: "If you ordered adjustable poles, simply twist the two sections of the pole in opposite directions to unlock them. Adjust to your desired length and twist them back to lock them in place."
  },
  {
    question: "What is your return policy?",
    answer: "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your ski poles, you can return them within 30 days of receiving your order for a full refund. Please ensure that the poles are in their original condition and packaging. To initiate a return, please contact our customer service team at hey@Linsale.day."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we do offer international shipping! We ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination. During checkout, you will be able to see the available shipping options and their respective costs for your location."
  }, 
  {
    question: "How can I track my order?",
    answer: "Once your order has been shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can use this information to monitor the status of your delivery."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also accept payments through PayPal for your convenience."
  },
  {
    question: "How can I contact customer support?",
    answer: "If you have any questions or need assistance, our customer support team is here to help! You can reach us via email at hey@Linsale.day."
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
