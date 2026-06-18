import { useState } from "react";

const faqs = [
  {
    question:
      "Is coding experience required?",
    answer:
      "No, beginners are welcome.",
  },
  {
    question:
      "Are classes conducted live?",
    answer:
      "Yes, all sessions are live online.",
  },
  {
    question:
      "Will certificates be provided?",
    answer:
      "Yes, certificates will be awarded.",
  },
];

function FAQ() {
  const [open, setOpen] =
    useState(null);

  return (
    <section>
      <div className="container">
        <h2>FAQs</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
            }}
          >
            <button
              className="btn"
              onClick={() =>
                setOpen(
                  open === index
                    ? null
                    : index
                )
              }
            >
              {faq.question}
            </button>

            {open === index && (
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;