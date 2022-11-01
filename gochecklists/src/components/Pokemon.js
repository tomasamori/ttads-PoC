import React, {useState} from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;
    const {handleValue} = props;
    const [isChecked, setIsChecked] = useState(false);

    const updateValue = (r) => {
        handleValue(r);
    }

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        updateValue(!isChecked);
    }

    return (
        <label>
            <div className="card">
                <div className="pokemon-name">
                    <span className="text-capitalize">{pokemon.name}</span>
                    <input type="checkbox" className="form-check checkbox" onChange={handleOnChange}></input>
                </div>
                <div className="sprite">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                </div>
            </div>
        </label>

    );
};

export default Pokemon;