import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function searchForm(event) {
    event.preventDefault();
    //add documentation form:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
