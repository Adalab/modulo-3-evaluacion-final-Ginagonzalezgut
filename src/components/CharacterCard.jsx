import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard({ character }) {
  return (
    <div className="character">
      <Link className="character__link" to={`/character/${character.id}`}>
        <img
          className="character__image"
          src={character.image}
          alt={character.name}
        />
        <h1 className="character__name">{character.name}</h1>
        <h2 className="character__species">{character.species}</h2>
      </Link>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
