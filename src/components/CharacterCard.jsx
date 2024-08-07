function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <h2>{character.species}</h2>
    </div>
  );
}

export default CharacterCard;
