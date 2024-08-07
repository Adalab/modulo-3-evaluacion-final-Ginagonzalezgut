import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../scss/components/CharacterList.scss";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.name} character={character} />;
  });
  return <div className="characters">{charactersElements}</div>;
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
