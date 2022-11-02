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