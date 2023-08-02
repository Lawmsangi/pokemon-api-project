import { display, totalPokemon } from './modules/display';
import getPokemon from './modules/getPokemon';
import { getLikes } from './modules/like';
import './style.css';

const pokemonId = [1,4, 7, 10,13,16,19,21,25,28,31,34,37,41,47,49,52,55,59,62,65,68,71,74,79,82,85];

async function fetchPokemons() {
  const pokemons = await Promise.all(
    pokemonId.map(pokemon => getPokemon(pokemon)),
  );
  const count = document.getElementById('count');
  count.innerHTML= totalPokemon(pokemons);
  const likes = JSON.parse(await getLikes())
  display(pokemons,likes);
}
 
fetchPokemons();
