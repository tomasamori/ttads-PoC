import './App.css';
import Dex from './components/Dex';
import {useState, useEffect} from 'react';
import {getPokemonData, getPokemons} from './services/pokemonService';
import Header from './components/Header';

export default function App() {

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try {
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const results = await Promise.all(promises);
            setPokemons(results);
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);


  return (
      <html>
      <header>
          <Header></Header>
      </header>
      <body>
      <Dex pokemons={pokemons}></Dex>
      </body>
      </html>
  );
}