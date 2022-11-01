import React from 'react';
import Header from './Header';
import DexModes from "../services/DexModes";

const Home = (props) => {
    const { pokemons } = props;

    return (
        <div>
            <Header title={"GO Checklists"}></Header>
            <ul className="sc-jSMfEi kweIhM">
                <li>
                    <a href="/dex">Dex</a>
                </li>
                <ul>
                    <li>
                        Track your main Pokédex completion in Pokémon GO.
                    </li>
                </ul>
                <li>
                    <a href="/shiny">ShinyDex</a>
                </li>
                <ul>
                    <li>
                        Track which of the available shinies you’ve caught.
                    </li>
                </ul>
                <li>
                    <a href="/lucky">LuckyDex</a>
                </li>
                <ul>
                    <li>
                        Track how many lucky Pokémon you’ve acquired.
                    </li>
                </ul>
                <li>
                    <a href="/unown">UnownDex</a>
                </li>
                <ul>
                    <li>
                        Track how many Unown you own.
                    </li>
                </ul>
                <li>
                    <a href="/shadow">ShadowDex</a>
                </li>
                <ul>
                    <li>
                        Track how many shadow Pokémon you have.
                    </li>
                </ul>

            </ul>
        </div>
    );
};

export default Home;