import React, { useEffect, useState, createContext } from "react";

import useFetch from "../hook/useFetch";

import QuestionView from "./questionView";

import Catergory from "./catergory";

import StartView from "./startView";

import ResultView from "./resultView";

import "../quiz.css";

export const GeneralContent = createContext();

export default function Quiz() {
  const [categories, setCategories] = useState([]);

  const [questions, setQuestions] = useState([]);

  const [count, setCount] = useState(0);

  const [score, setScore] = useState(0);

  const [select, setSelect] = useState(false);

  const [gameStart, setGameStart] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const { data: categoryData, isLoading: categoryLoading } = useFetch(
    "https://the-trivia-api.com/api/categories",
    "category"
  );

  useEffect(() => {
    for (const key in categoryData) {
      if (categoryData.hasOwnProperty.call(categoryData, key)) {
        const element = categoryData[key];

        setCategories((prevCat) => [...prevCat, ...element]);
      }
    }
  }, [categoryData]);

  if (categoryLoading) {
    return <span className="loader"></span>;
  }

  const currentQuestion = questions[count];

  return (
    <section className="quiz text-white h-full bg-gradient-to-t from-purple-700 to-black grid place-content-center p-5">
      <GeneralContent.Provider
        value={{
          score,
          setScore,
          select,
          setSelect,
          setQuestions,
          setCount,
          count,
          questions,
          setGameOver,
          gameStart,
          setGameStart,
          categories,
        }}
      >
        {!gameStart && <StartView />}
        {gameStart && !currentQuestion && !gameOver && <Catergory />}

        {currentQuestion && <QuestionView {...currentQuestion} />}
        {gameOver && <ResultView />}
      </GeneralContent.Provider>
    </section>
  );
}
