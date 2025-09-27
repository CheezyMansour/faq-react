import { useState } from "react";
import plusIcon from "./assets/images/icon-plus.svg";

export function ListItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpansion() {
    setIsExpanded(prev => !prev)
  }



  return (
    <li onClick={handleExpansion} className="faq-section">
      <div className="question-row">
        <h2>
          <button type="button">{question}</button>
        </h2>
        <img src={plusIcon} alt="plus icon" />
      </div>

      <p className={isExpanded ? 'expanded' : ''} >{answer}</p>
    </li>
  );
}
