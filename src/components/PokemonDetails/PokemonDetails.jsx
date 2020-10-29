import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pokemonApi } from 'api';

let cache = {};
export default function PokemonDetails() {
    let { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        async function fetchData() {
            if (cache[pokemonName]) {
                setPokemon(cache[pokemonName])  
            }
            else {
                const response = (await pokemonApi.getPokemon(pokemonName)).data;
                const pokemonInfo = {
                    image: response.sprites.front_default, 
                    types: response.types, 
                    weight: response.weight
                };
                cache = {...cache, [pokemonName]: pokemonInfo };
                setPokemon(pokemonInfo);
            }
        }
        fetchData();
    }, [pokemonName]);
   
    return(
        <div>
           <h1>Detail</h1>
           <img src={pokemon.image} alt={pokemonName}/>
           <div>Types</div>
            { pokemon.types 
                ? pokemon.types.map((typesInfo, key) => <div key={`type_${key}`}>{typesInfo.type.name}</div>)
                : null
            }
           <div>Weight{pokemon.weight}</div>
            <Link to="/">Back</Link>
        </div>
    )
}
