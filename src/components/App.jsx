import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import getCharacters from "../services/api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  function handleFilterName(value) {
    setFilterName(value);
  }
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <Filter onChangeName={handleFilterName} />
      <CharacterList characters={filteredCharacters} />
    </>
  );
}

export default App;
