import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function ResultView() {
  const { score, questions, setGameOver } = useContext(GeneralContent);

  const handleClick = () => {
    setGameOver(false);
  };

  return (
    <div className="h-screen bg-gradient-to-t from-purple-700 to-black grid place-content-center p-5">
      <h1 className="my-5">
        You Scored: {score} of {questions.length}
      </h1>
      <button
        className="py-1.5 px-2.5 cursor-pointer border border-solid rounded-md border-2"
        onClick={handleClick}
      >
        Restart
      </button>
    </div>
  );
}

export default ResultView;
