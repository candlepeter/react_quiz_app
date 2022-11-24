import React, { useEffect, useState, createContext } from "react";

import useFetch from "../hook/useFetch";

import QuestionView from "./questionView";

import Catergory from "./catergory";

import StartView from "./startView";

import ResultView from "./resultView";

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
    return <h2>loading...</h2>;
  }

  const currentQuestion = questions[count];

  return (
    <section className="quiz">
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
        }}
      >
        {!gameStart && <StartView />}
        {gameStart && !currentQuestion && !gameOver && (
          <Catergory category={categories} />
        )}

        {currentQuestion && <QuestionView {...currentQuestion} />}
        {gameOver && <ResultView />}
      </GeneralContent.Provider>
    </section>
  );
}
