import React, { useEffect, useState } from 'react';
import { pokemonApi } from 'api';
import { Link } from 'react-router-dom';

export default function PokemonList() {
    
    const [pokemons, setPokemons] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const response = (await pokemonApi.getPokemonList()).data;
            setPokemons(response.results);
        }
       fetchData();
    }, []);
   

    return (
        <div>
            <h1>Pokemons List</h1>
                {pokemons.map((pokemon) => {
                    const {name} = pokemon;
                    return(
                        <div key={`pokemon_${name}`}>
                        <Link to={`pokemon-details/${name}`}>{name}</Link>
                        </div>
                    );
                })}
        </div>
    )
}
