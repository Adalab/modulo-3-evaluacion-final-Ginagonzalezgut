const getCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((response) => {
      const parsedCharacters = response.results;
      return parsedCharacters;
    });
};

export default getCharacters;
