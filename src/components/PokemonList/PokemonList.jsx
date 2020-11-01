import React, { useEffect, useState, useCallback } from 'react';
import { pokemonApi } from 'api';
import { Link } from 'react-router-dom';
import './PokemonList.scss';

const PokemonList = () => {
const blockName = 'pokemon-list';
const [page, setPage] = useState(1);
const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const response = (await pokemonApi.getPokemonList(page)).data;
            setPokemons(response.results);
        }
       fetchData();
    }, [page]);
   
    const goBack = useCallback(() => {
        setPage(page -1);
    },[page]);
    
    const goNext = useCallback(() => {
        setPage(page + 1);
    },[page])

    return (
        <div className={blockName} >
            <img className={`${blockName}__pokemon-logo`} src='pokemon-logo.png' alt='pokemon-logo'></img>
            <div className={`${blockName}__cards-container`}>
                {pokemons.map((pokemon) => {
                    const {name} = pokemon;
                    console.log('Test:pokemon', pokemon);
                    return(
                       
                        <div  className={`${blockName}__card`}key={`pokemon_${name}`}>
                        <Link className={`${blockName}__link`} 
                            to={`pokemon-details/${name}`}>
                            {name}
                        </Link>
                        </div>
                    );
                })}
            </div>
                { page > 1 && <button onClick={goBack}>Back</button> }                
                <button onClick={goNext}>Next</button>
        </div>
    );
}
export default PokemonList;
