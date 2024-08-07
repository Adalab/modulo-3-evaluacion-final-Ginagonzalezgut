import PropTypes from "prop-types";

function Filter({ onChangeName }) {
  function handleChange(event) {
    event.preventDefault();
    onChangeName(event.target.value);
  }
  return (
    <form>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="Busca a tu personaje"
      />
    </form>
  );
}
Filter.propTypes = {
  onChangeName: PropTypes.func,
};
export default Filter;
