import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import getCharacters from "../services/api";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  return (
    <>
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
