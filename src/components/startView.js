import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function StartView() {
  const { gameStart, setGameStart } = useContext(GeneralContent);

  const handleClick = () => {
    setGameStart(!gameStart);
  };

  return (
    <div>
      <h3>click the button below to start quiz</h3>
      <button onClick={handleClick}>start Quiz</button>
    </div>
  );
}

export default StartView;
