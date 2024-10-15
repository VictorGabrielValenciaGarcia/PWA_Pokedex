// src/Pokemon.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import getColorForType from '../shared/PokemonTypes';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {

        const min = 1;
        const max = 50;
        const rand = min + Math.random() * (max - min);

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${rand}`);
        const pokemonData = await Promise.all(
          response.data.results.map(async (poke) => {
            const pokeDetails = await axios.get(poke.url);
            return pokeDetails.data;
          })
        );
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching the Pokémon data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return<div className="container min-h-screen px-4 pt-8 mx-auto">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative w-11/12 mx-auto bg-white shadow-xl rounded-xl animate-pulse"
          >
            <div className="h-48 bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded"></div>
              <div className="w-full h-6 mb-4 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>;
  }

  return (
    <div className="container min-h-screen px-4 py-8 mx-auto">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemon.map((poke) => (
          <Link
            to={`/poke_data/${poke.name}`}
            key={poke.id}
            className="relative w-full mx-auto bg-white shadow-xl rounded-xl hover:bg-slate-200 hover:border-2 border-slate-300 hover:animate-pulse"
          >
            
            <div 
              className="absolute top-0 justify-center w-full rounded-b-full rounded-t-xl h-44" 
              style={{
                borderBottomRightRadius: '20rem',
                borderBottomLeftRadius: '20rem',
                borderTopLeftRadius: '0.75rem', // 12px
                borderTopRightRadius: '0.75rem', // 12px
                backgroundColor: getColorForType(poke.types[0].type.name),
                opacity: 0.8
              }}
            />

            <div className='p-6'>
              <div className="relative z-10 flex justify-end">
                <div className="w-20 py-2 font-medium text-center bg-white rounded-full shadow-sm">
                  <span className="text-sm">HP: <span className='text-base font-medium'>{poke.stats[0].base_stat}</span></span>
                </div>
              </div>
              
              <img
                src={poke.sprites.other['official-artwork'].front_default}
                alt={poke.name}
                className="relative z-10 block pb-0 mx-auto mt-3 mb-0 w-52 max-h-52 -top-5"
              />
              
              <h2 className="relative py-0 mt-0 mb-4 text-2xl font-semibold text-center capitalize -top-5">{poke.name}</h2>
              
              <div className="relative flex justify-around mb-6 -top-2">
                {poke.types.map((type, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 font-medium text-white capitalize rounded-full"
                    style={{ backgroundColor: getColorForType(type.type.name) }}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between px-3 font-medium text-center text-gray-700 ">
                <p><span className='font-bold text-black'>{poke.stats[1].base_stat}</span> <br /> Attack</p>
                <p><span className='font-bold text-black'>{poke.stats[2].base_stat}</span> <br /> Defense</p>
                <p><span className='font-bold text-black'>{poke.stats[5].base_stat}</span> <br /> Speed</p>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
