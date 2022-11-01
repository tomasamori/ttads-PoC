import React, {useState} from 'react';
import styled from 'styled-components';

import DexModes from '../services/DexModes';
import Pokemon from './Pokemon';

import Header from './Header';
import Progressbar from "./Progressbar";

const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 2;
`;

/* const MonList = styled.div`
  padding: 5.7em 0 0.5em 0;
  margin: 0.25em;
  touch-action: manipulation;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card-group {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: middle;
    margin: 0em 0.25em;
  }
  .card {
    width: 9em;
    margin: 0.25em;
    border: 1px solid #DCE7DC;
    border-radius: 10px;
    cursor: pointer;
    height: 7em;
    position: relative;
    font-size: 0.8em;
  }
  @media (max-width: 500px) {
    .card { font-size: 0.75em; }
  }
  @media (max-width: 370px) {
    .card { font-size: 0.70em; }
  }
  .selected {
    background-color: #F5F5F5;
  }
  .card span {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
  }
  .checkbox {
    position: absolute;
    top: 0.5em;
    right: 0.25em;
    width: 1.75em;
  }
  .card .gender {
    top: auto;
    bottom: 0.5em;
  }
  .checked {
    display: none;
  }
  .selected .checked {
    display: inline;
  }
  .sprite {
    position: absolute;
    top: 1.25em;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0 auto;
    width: 6em;
  }
`;*/

const Dex = (props) => {
    const [owned, setOwned] = useState(0);

    const { pokemons } = props;

    const handleValue = (r) => {
        if (r) {
            setOwned(owned + 1);
        }
        else {
            setOwned(owned - 1);
        }
    }

    return (
        <div>
            <FixedContainer>
                <Header title={DexModes.getPageTitle(DexModes.DEX)} settingsClick={true}></Header>
                <Progressbar value={owned} max={pokemons.length}></Progressbar>
            </FixedContainer>
            <div className="styled-div">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} handleValue={handleValue}></Pokemon>;
                })}
            </div>
        </div>
    )
}

export default Dex;