import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import getCharacters from "../services/api";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import { useLocation, matchPath } from "react-router";
import CharacterDetail from "./CharacterDetail";

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

  const { pathname } = useLocation();
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : "";

  console.log(characters);
  const characterSelected = characters.find((character) => {
    return character.id === parseInt(characterId);
  });
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Filter
                  filterName={filterName}
                  onChangeName={handleFilterName}
                />
                {filteredCharacters.length > 0 ? (
                  <CharacterList characters={filteredCharacters} />
                ) : (
                  <p>no hay ningun nombre</p>
                )}
              </div>
            }
          />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail character={characterSelected} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
