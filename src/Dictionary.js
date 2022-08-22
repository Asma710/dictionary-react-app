import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function searchForm(event) {
    event.preventDefault();

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
      <Result allResult={result} />
    </div>
  );
}
