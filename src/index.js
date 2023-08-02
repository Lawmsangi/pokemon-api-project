import { display, totalPokemon } from './modules/display';
import getPokemon from './modules/getPokemon';
import { getLikes } from './modules/like';
import './style.css';

const pokemonId = [197,150,282,133,300,493,484,39,25,480,481,482,392,1,3, 7, 10,13,16,19,151];

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
