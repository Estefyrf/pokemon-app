import React, { useEffect, useState } from 'react';
import { pokemonApi } from 'api';
import { Link } from 'react-router-dom';

export default function PokemonList() {
    
    const [pokemons, setPokemons] = useState([]);
    useEffect( () => {
        async function fetchData() {
            const response = await pokemonApi.getPokemonList();
            setPokemons(response.data.results);
        }
       fetchData();
    }, []);
   

    return (
        <div>
            <h1>Pokemons List</h1>
                {pokemons.map((pokemon, key) => {
                    return(
                        <div key={`pokemon_${key}`}>
                        <Link to={`pokemon-details/${pokemon.name}`}>{pokemon.name}</Link>
                        </div>
                    );
                })}
        </div>
    )
}
