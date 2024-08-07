import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <h2>{character.species}</h2>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
