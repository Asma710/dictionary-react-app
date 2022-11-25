import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";
export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.dictionary);
  let [result, setResult] = useState(null);
  let [load, setLoad] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handlePixelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    let pixelsApiKey =
      "563492ad6f9170000100000138ba870d945b485caf38d8d717c0da08";
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=10`;

    const headers = { Authorization: `Bearer ${pixelsApiKey}` };
    axios.get(pixelsApiUrl, { headers: headers }).then(handlePixelsResponse);
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
          <h2>What word do you want to look up?</h2>
          <form onSubmit={searchForm}>
            <input
              type="search"
              onChange={handleKwyWordChange}
              defaultValue={props.dictionary}
            ></input>
          </form>
          <div className="hint"> Suggested word: sunset, happy....</div>
        </section>
        <Result allResult={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    loaded();
    return "Loading...";
  }
}
