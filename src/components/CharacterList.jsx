import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.name} character={character} />;
  });
  return <div>{charactersElements}</div>;
}

export default CharacterList;
