import PropTypes from "prop-types";
import "../scss/components/FilterByName.scss";

function FilterByName({ onChangeName, filterName }) {
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
          placeholder="Search your character"
          value={filterName}
          autoFocus
        />
      </div>
    </form>
  );
}
FilterByName.propTypes = {
  filterName: PropTypes.string,
  onChangeName: PropTypes.func,
};
export default FilterByName;
