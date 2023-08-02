import { display, totalPokemon } from './modules/display';
import getPokemon from './modules/getPokemon';
import { getLikes } from './modules/like';
import './style.css';

const pokemonId = [197,150,282,133,300,151,39,1,4, 7, 10,13,16,19,21];

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
