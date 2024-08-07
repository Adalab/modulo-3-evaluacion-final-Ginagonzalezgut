import "../scss/components/MessageNoResults.scss";
import PropTypes from "prop-types";

function MessageNoResults({ filterName }) {
  return (
    <div className="messageNoResults">
      <p className="messageNoResults__text">
        Sorry Morty, your search for{" "}
        <b className="messageNoResults__term">{filterName}</b> did not match any
        character.
      </p>
    </div>
  );
}

export default MessageNoResults;
