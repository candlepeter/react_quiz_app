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
      <button
        className="py-1.5 px-3.5 cursor-pointer border border-solid rounded-md border-2"
        onClick={handleClick}
      >
        start Quiz
      </button>
    </div>
  );
}

export default StartView;
