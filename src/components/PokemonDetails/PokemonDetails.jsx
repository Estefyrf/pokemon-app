import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pokemonApi } from 'api';
import './PokemonDetails.scss';
import Loading from 'components/Loading/Loading';

let cache = {};
const PokemonDetails = () => {
const blockName = 'pokemon-details';
let { pokemonName } = useParams();
const [pokemon, setPokemon] = useState({});

    useEffect( () => {
        const fetchData = async () => {
            if (cache[pokemonName]) {
                setPokemon(cache[pokemonName])  
            }
            else {
                const response = (await pokemonApi.getPokemon(pokemonName)).data;
                const pokemonInfo = {
                    name: response.name,
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
        <div className={blockName}>
            <div className={`${blockName}__card-container`}>
                {pokemon.image ? '' : <Loading message={'Loading...'}/>}
                <img className={`${blockName}__pokemon-image`}src={pokemon.image} alt={pokemonName}/>
                <div>{pokemon.name}</div>
                <div>Types</div>
                    { pokemon.types 
                        ? pokemon.types.map((typesInfo) => {
                            const {type: { name }} = typesInfo;
                            return <div key={`type_${name}`}>{name}</div>
                        })
                        : null
                    }
                <div>Weight{pokemon.weight}</div>
                    <Link to="/">Back</Link>
            </div>
        </div>
    );
}
export default PokemonDetails;