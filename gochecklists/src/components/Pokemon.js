import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;

    return (
        <div className="card">
            <div className="pokemon-name">
                <span>{pokemon.name}</span>
                <input type="checkbox" className="checkbox"></input>
            </div>
            <div className="sprite">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
        </div>
    );
};

export default Pokemon;