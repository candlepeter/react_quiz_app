import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function StartView() {
  const { gameStart, setGameStart } = useContext(GeneralContent);

  const handleClick = () => {
    setGameStart(!gameStart);
  };

  return (
    <div className="h-screen bg-gradient-to-t from-purple-700 to-black grid place-content-center p-5">
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
