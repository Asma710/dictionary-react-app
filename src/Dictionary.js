import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function searchForm(event) {
    event.preventDefault();
    alert(` hello from ${keyWord}`);
  }
  function handleKwyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchForm}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKwyWordChange}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
