import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Dex from './components/Dex';
import {useState, useEffect} from 'react';
import {getPokemonData, getPokemons} from './services/pokemonService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

    function NotFound() {
        return <h1>404!</h1>;
    }


  return (
      <div>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/dex" element={<Dex pokemons={pokemons}></Dex>} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
      </div>
  );
}