import { getClient } from './client';

const client = getClient();
const pokemonApi = {
    getPokemonList: async () => await client.get('/pokemon/'),
    getPokemon: async name => await client.get(`/pokemon/${name}/`),
}
export default pokemonApi;