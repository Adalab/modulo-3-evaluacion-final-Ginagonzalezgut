import PropTypes from "prop-types";
import "../scss/components/CharacterDetail.scss";
import { Link } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <div className="characterDetail">
      <div className="characterDetail__card">
        <img
          className="characterDetail__image"
          src={character.image}
          alt={character.name}
        />
        <div>
          <h1>{character.name}</h1>
          <p>
            <b>Species:</b> {character.species}
          </p>
          <p>
            <b>Origin:</b> {character.origin.name}
          </p>
          <p>
            <b>Number of episodes:</b> {character.episode.length}
          </p>
          <p>
            <b>Status:</b> {character.status}
          </p>
        </div>
      </div>
      <Link className="characterDetail__link" to="/">
        Back
      </Link>
    </div>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.object,
};

export default CharacterDetail;
