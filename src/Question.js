import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiChevronUp /> : <BiChevronDown />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
