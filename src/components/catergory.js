import React, { useContext } from "react";
import { GeneralContent } from "./quiz";

function Catergory(props) {
  const { setQuestions } = useContext(GeneralContent);

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
    <div className="category">
      <h3>select from the different category</h3>
      <div className="btn-container" onClick={handleClick}>
        {props.category.map((c, i) => {
          return (
            <button value={c} className="btn" key={i}>
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Catergory;
