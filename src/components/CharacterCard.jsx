import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <div>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <h2>{character.species}</h2>
      </Link>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
