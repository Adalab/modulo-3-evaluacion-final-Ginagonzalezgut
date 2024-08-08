import PropTypes from "prop-types";
import "../scss/components/FilterBySpecie.scss";

function FilterBySpecie({ onChangeSpecies }) {
  function handleSpecies(event) {
    event.preventDefault();
    onChangeSpecies(event.target.value);
  }
  return (
    <form className="specieFilter" action="">
      <select
        className="specieFilter__select"
        name=""
        id="specieFilter"
        onChange={handleSpecies}
      >
        <option value="All">All </option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </form>
  );
}
FilterBySpecie.propTypes = {
  onChangeSpecies: PropTypes.func,
};
export default FilterBySpecie;
