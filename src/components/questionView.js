import React, { useContext } from "react";
import { GeneralContent } from "./quiz";
import { shuffled } from "../hook/helper";

const QuestionView = (props) => {
  const { score, setScore, select, setSelect } = useContext(GeneralContent);

  let answerVals = shuffled([...props.incorrectAnswers, props.correctAnswer]);

  const handleClick = (e) => {
    console.log(e.target.value);
    setSelect(true);
    if (e.target.value === props.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      return score;
    }
  };

  console.log(score);

  return (
    <div>
      <h1>{props.category}</h1>
      <p>{props.question}</p>
      <div className="btn-container" type="a" style={{ cursor: "pointer" }}>
        {answerVals.map((answer) => {
          return (
            <button
              disabled={select}
              key={answer.sort}
              value={answer.value}
              onClick={handleClick}
            >
              {answer.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionView;
