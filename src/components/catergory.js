import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function Catergory(props) {
  const { setQuestions, categories } = useContext(GeneralContent);

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

  return (
    <div className="w-full h-full bg-gradient-to-t from-purple-700 to-black p-5">
      <h3 className="my-2.5 btn py-2 px-2 cursor-pointer border border-solid rounded-md border-2 text-xl">
        select from the different category
      </h3>
      <div className="grid grid-cols-2 gap-y-2.5 gap-x-5" onClick={handleClick}>
        {categories.map((c, i) => {
          return (
            <button
              value={c}
              className="btn py-2 px-2 cursor-pointer border border-solid rounded-md border-2"
              key={i}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Catergory;
