import React, { useContext } from "react";
import { GeneralContent } from "./quiz";
import { shuffled } from "../hook/helper";

const QuestionView = (props) => {
  const {
    score,
    setScore,
    select,
    setSelect,
    setCount,
    count,
    questions,
    setGameOver,
  } = useContext(GeneralContent);

  let answerVals = shuffled([...props.incorrectAnswers, props.correctAnswer]);

  const handleClick = (e) => {
    setSelect(true);
    if (e.target.value === props.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      return score;
    }
  };

  const handleNext = () => {
    setCount((prevCount) => prevCount + 1);

    setSelect(false);

    if (count + 1 === questions.length) {
      setGameOver(true);
    }
  };

  return (
    <div>
      <p>
        {count + 1} of {questions.length}
      </p>
      <h1>{props.category}</h1>
      <p>{props.question}</p>
      <div className="btn-container" type="a" style={{ cursor: "pointer" }}>
        {answerVals.map((answer) => {
          return (
            <button
              disabled={select}
              key={answer.value}
              value={answer.value}
              onClick={handleClick}
            >
              {answer.value}
            </button>
          );
        })}
      </div>
      {select ? <button onClick={handleNext}>Next Question</button> : null}
    </div>
  );
};

export default QuestionView;
