import React from "react";
import "./Column.scss";
const Column = () => {
  return (
    <div className="column">
      <header> Brainstorm</header>
      <ul>
        <li>
          <img
            src="https://i.pinimg.com/originals/a3/7e/a3/a37ea3af2f46c2f81e7d1318fabde3de.jpg"
            alt="nguyen"
          />
          Titte: Nguyen ne
        </li>
        <li>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </li>
        <li>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </li>
        <li>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
