import React, { useEffect, useState, createContext } from "react";

import useFetch from "../hook/useFetch";

import QuestionView from "./questionView";

export const GeneralContent = createContext();

export default function Quiz() {
  const [categories, setCategories] = useState([]);

  const [questions, setQuestions] = useState([]);

  const [count, setCount] = useState(0);

  const [score, setScore] = useState(0);

  const [select, setSelect] = useState(false);

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

  async function fetchQuestion(category) {
    let url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=10`;

    const resp = await fetch(url);
    const data = await resp.json();

    setQuestions(data);
  }

  const handleClick = (e) => {
    if (!e.target.closest(".btn")) return;
    const { value } = e.target;
    fetchQuestion(value);
  };

  const handleNext = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
    setSelect(false);
  };

  const currentQuestion = questions[count];

  console.log(currentQuestion);

  return (
    <section className="quiz">
      <h2>select from the different category</h2>
      <div className="btn-container" onClick={handleClick}>
        {categories?.map((c, i) => {
          return (
            <button value={c} className="btn" key={i}>
              {c}
            </button>
          );
        })}
      </div>
      <GeneralContent.Provider value={{ score, setScore, select, setSelect }}>
        {currentQuestion && <QuestionView {...currentQuestion} />}
      </GeneralContent.Provider>
      {select ? <button onClick={handleNext}>Next Question</button> : null}
    </section>
  );
}
