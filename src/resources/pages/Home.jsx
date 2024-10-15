// src/Pokemon.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemon(response.data.results);
      } catch (error) {
        console.error("Error fetching the Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>
            {poke.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
