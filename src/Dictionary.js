import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.dictionary);
  let [result, setResult] = useState(null);
  let [load, setLoad] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchForm(event) {
    event.preventDefault();
    search();
  }
  function handleKwyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function loaded() {
    search();
    setLoad(true);
  }

  if (load) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <section>
          <h2>What word do you want to look up</h2>
          <form onSubmit={searchForm}>
            <input
              type="search"
              onChange={handleKwyWordChange}
              defaultValue={props.dictionary}
            ></input>
          </form>
          <div className="hint">Suggested word:sunset, happy....</div>
        </section>
        <Result allResult={result} />
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}
