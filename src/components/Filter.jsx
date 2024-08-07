import PropTypes from "prop-types";
import "../scss/components/Filter.scss";

function Filter({ onChangeName, filterName }) {
  function handleChange(event) {
    event.preventDefault();
    onChangeName(event.target.value);
  }
  return (
    <form>
      <div className="searchForm">
        <input
          className="searchForm__name"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Busca a tu personaje"
          value={filterName}
          autoFocus
        />
      </div>
    </form>
  );
}
Filter.propTypes = {
  filterName: PropTypes.string,
  onChangeName: PropTypes.func,
};
export default Filter;
