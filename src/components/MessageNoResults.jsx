import "../scss/components/MessageNoResults.scss";
import PropTypes from "prop-types";

function MessageNoResults({ filterName }) {
  return (
    <div className="messageNoResults">
      <p>
        Sorry Morty, your search for
        <b className="messageNoResults__term"> "{filterName}"</b> did not match
        any character.
      </p>
    </div>
  );
}
MessageNoResults.propTypes = {
  filterName: PropTypes.string,
};
export default MessageNoResults;
