import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.name} character={character} />;
  });
  return <div>{charactersElements}</div>;
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
