const getPokemon = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, options);
  const data = await response.json();
  return data;
};

export default getPokemon