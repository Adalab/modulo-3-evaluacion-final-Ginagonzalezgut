import PropTypes from "prop-types";

function FilterBySpecie({ onChangeSpecies }) {
  function handleSpecies(event) {
    event.preventDefault();
    onChangeSpecies(event.target.value);
  }
  return (
    <form action="">
      <label htmlFor="specieFilter">Filter by specie:</label>
      <select name="" id="specieFilter" onChange={handleSpecies}>
        <option value="All">All</option>
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
