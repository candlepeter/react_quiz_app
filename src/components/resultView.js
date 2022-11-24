import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function ResultView() {
  const { score, questions, setGameOver } = useContext(GeneralContent);

  const handleClick = () => {
    setGameOver(false);
  };

  return (
    <div>
      <h1>
        You Scored: {score} of {questions.length}
      </h1>
      <button onClick={handleClick}>Restart</button>
    </div>
  );
}

export default ResultView;
