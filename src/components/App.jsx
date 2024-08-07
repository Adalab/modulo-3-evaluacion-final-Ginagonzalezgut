import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import getCharacters from "../services/api";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import { useLocation, matchPath } from "react-router";
import CharacterDetail from "./CharacterDetail";
import MessageNotFound from "./MessageNotFound";
import Header from "./Header";
import MessageNoResults from "./MessageNoResults";
import FilterBySpecie from "./FilterBySpecie";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("All");

  useEffect(() => {
    getCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  function handleFilterName(value) {
    setFilterName(value);
  }

  function handleFilterSpecies(value) {
    setFilterSpecie(value);
  }
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecie === "All") {
        return true;
      } else {
        return filterSpecie === character.species;
      }
    });

  const { pathname } = useLocation();
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData !== null ? routeData.params.characterId : "";

  const characterSelected = characters.find((character) => {
    return character.id === parseInt(characterId);
  });

  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FilterByName
                  filterName={filterName}
                  onChangeName={handleFilterName}
                />
                <FilterBySpecie onChangeSpecies={handleFilterSpecies} />
                {filteredCharacters.length > 0 ? (
                  <CharacterList characters={filteredCharacters} />
                ) : (
                  <MessageNoResults filterName={filterName} />
                )}
              </div>
            }
          />
          <Route
            path="/character/:characterId"
            element={
              characterSelected === undefined ? (
                <MessageNotFound />
              ) : (
                <CharacterDetail character={characterSelected} />
              )
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
