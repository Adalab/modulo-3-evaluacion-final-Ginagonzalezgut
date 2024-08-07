import PropTypes from "prop-types";

function CharacterDetail({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <h2>{character.species}</h2>
      <p>{character.origin.name}</p>
      <p>{character.episode.length}</p>
      <p>{character.status}</p>
    </div>
  );
}

export default CharacterDetail;
