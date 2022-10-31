import React from 'react';
import Pokemon from './Pokemon';

const Dex = (props) => {
    const { pokemons } = props;
    return (
        <div>
            <div className="header">
                <h1>Dex</h1>
            </div>
            <div className="styled-div">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
            </div>
        </div>
    )
}

export default Dex;