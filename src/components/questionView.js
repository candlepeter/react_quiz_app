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

  let disabledBtn = { opacity: 0.2 };
  let enabledBtn = { opacity: 1 };

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
    <div className="h-screen bg-gradient-to-t from-purple-700 to-black grid place-content-center p-5">
      <div className="py-2.5 px-2.5 cursor-pointer border border-solid rounded-md border-2 divide-y-2 divide-black divide-white">
        <p className="mt-2.5">
          {count + 1} of {questions.length}
        </p>
        <h1 className="mt-2.5 text-xl">{props.category}</h1>
        <p className="mt-2.5 p-2.5">{props.question}</p>
      </div>
      <div
        className="grid mt-5 grid-cols-2 gap-y-2.5 gap-x-5"
        type="a"
        style={{ cursor: "pointer" }}
      >
        {answerVals.map((answer) => {
          return (
            <button
              className="py-1.5 px-2.5 cursor-pointer border border-solid rounded-md border-2 bg-purple-800"
              style={select ? disabledBtn : enabledBtn}
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
      {select ? (
        <button
          className="py-2.5 mt-5 px-1 cursor-pointer border border-solid rounded-md border-2 bg-purple-800"
          onClick={handleNext}
        >
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default QuestionView;
