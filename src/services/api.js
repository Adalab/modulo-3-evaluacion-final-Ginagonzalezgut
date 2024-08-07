const getCharacters = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((response) => {
      const parsedCharacters = response.results;
      return parsedCharacters;
    });
};

export default getCharacters;
