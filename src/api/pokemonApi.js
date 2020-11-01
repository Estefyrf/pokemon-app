import { getClient } from './client';

const client = getClient();
const pokemonLimit = 9;
const pokemonApi = {
    getPokemonList: async (page) => await client.get(`/pokemon/?limit=${pokemonLimit}&offset=${page * pokemonLimit}`),
    getPokemon: async name => await client.get(`/pokemon/${name}/`),
}
export default pokemonApi;