import { useState } from "react";

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="faq-item">
      <h1>State FAQ Level-1_1 & 1_2</h1>
      <div className="faq-header">
        <p>Why is React great?</p>
        <button onClick={() => setIsOpen(!isOpen)}>+</button>
      </div>
      {isOpen && (
        <div>
          <hr />
          <div className="faq-answer">
            <p>Fast Leaning Curve</p>
            <button onClick={() => setIsDetailOpen(!isDetailOpen)}>+</button>
          </div>
        </div>
      )}
      {isDetailOpen && (
        <div className="faq-detailed-answer">
          <hr />
          <p>
            React is very a simple and lightweight library that only deals with
            the view layer. It is not a beast like other MV* frameworks such as
            Angular or Ember. Any Javascript developer can understand the basics
            and start developing an awesome web application after only a couple
            of days reading tutorial. As the React guide says ‘Thinking in
            React’ may be a little different than you used to since it brings a
            new approach to the table, but it will become much easier and
            natural as you gain experience with it.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
