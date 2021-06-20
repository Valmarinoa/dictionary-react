import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001500c8c5a052a451d80156004a8e1c2be";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=80`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function keywordValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="leftside">
            <form onSubmit={search}>
              <input
                className="buscar"
                type="search"
                autoFocus={true}
                placeholder="type any word"
                onChange={keywordValue}
              />
            </form>
            <Results results={results} />
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="rightside">
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
}
