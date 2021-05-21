import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function keywordValue(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={keywordValue} />
      </form>
    </div>
  );
}
