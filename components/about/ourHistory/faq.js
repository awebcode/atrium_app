import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [openIndex2, setOpenIndex2] = useState(null);

    const toggleQuestion2 = (index) => {
      setOpenIndex2((prevIndex) => (prevIndex === index ? null : index));
    };

  const faqData = [
    {
      question: "What is your return policy1?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How can I contact support2?",
      answer: "Pellentesque vel interdum elit, at ultrices sapien.",
    },
    {
      question: "What is your return policy3?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    
    // Add more FAQ data as needed
    ];
    const faqData2 = [
      {
        question: "What is your return policy6?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        question: "How can I contact support4?",
        answer: "Pellentesque vel interdum elit, at ultrices sapien.",
      },
      {
        question: "What is your return policy8?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },

      // Add more FAQ data as needed
    ];

  return (
    <div className="faq-container">
      <div className="testimonial-header x3">
        <div>
          <h2>Faq?</h2>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </div>
      <div className="flex">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex2 === index ? "open" : ""}`}
            onClick={() => toggleQuestion2(index)}
          >
            <h3 className="faq-question">
              {item.question}{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </h3>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
        {faqData2.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <h3 className="faq-question">
              {item.question}{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </h3>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
