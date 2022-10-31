import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;

    return (
        <div className="pokemon-card">
            <div className="pokemon-name">
                <span>{pokemon.name}</span>
                <input type="checkbox"></input>
            </div>
            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
        </div>
    );
};

export default Pokemon;