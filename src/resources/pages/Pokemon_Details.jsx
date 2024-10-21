// src/PokeData.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import getColorForType from '../shared/PokemonTypes';

function PokeData() {
  
  const { name } = useParams(); // Obtiene el parámetro de la URL
  const [pokemon, setPokemon] = useState(null); // Guarda los datos del Pokémon
  const [loading, setLoading] = useState(true); // Controla el estado de carga
  const [error, setError] = useState(null); // Maneja errores

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (err) {
        setError('No se pudo obtener la información del Pokémon.');
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 900);
      }
    };

    fetchPokemon();
  }, [name]); // Ejecuta cada vez que 'name' cambia

  if (loading) {
    return <div className="container min-h-screen px-4 pt-8 mx-auto">
      <div className="grid justify-center grid-cols-1 gap-8 align-middle sm:grid-cols-2">
          <div className="relative w-11/12 mx-auto bg-white shadow-xl rounded-xl animate-pulse" >
            <div className="bg-gray-300 h-52 rounded-t-xl"></div>
            <div className="p-4">
              <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded"></div>
              <div className="w-full h-6 mb-4 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="relative w-11/12 mx-auto bg-white shadow-xl rounded-xl animate-pulse" >
            <div className="p-4">
              <br />
              <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
              <br />
              <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded"></div>
              <br />
              <div className="w-full h-6 mb-4 bg-gray-300 rounded"></div>
              <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
      </div>
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container min-h-screen px-4 py-8 mx-auto">
      <div className="grid justify-around grid-cols-1 gap-8 align-middle sm:grid-cols-6">

        {/* Pokemon */}
        <div className="relative w-full mx-auto sm:col-span-3">

          {/* Image */}
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="relative z-20 block mx-auto mb-8 size-72"
          />
          
          {/* Shadow */}
          <div className="relative inset-0 z-10 flex items-center justify-center -top-16">
            <div 
              className="w-48 h-5 bg-slate-600 blur-lg" 
              style={{
                borderRadius: '50% / 100%',
              }}
            />
          </div>

          {/* Name */}
          <h1 className="pb-2 text-3xl font-bold text-center">#0{pokemon.id} {pokemon.name.toUpperCase()}</h1>
          <hr className='mx-auto border sm:w-1/2 mb-7 border-stone-500'/>

          {/* Type */}
          <div className="relative flex justify-center gap-4 mb-4">
            {pokemon.types.map((type, idx) => (
              <span
                key={idx}
                className="px-4 py-1 text-lg font-medium text-white capitalize rounded-full"
                style={{ backgroundColor: getColorForType(type.type.name) }}
              >
                {type.type.name}
              </span>
            ))}
          </div>

        </div>
        
        {/* Data */}
        <div className='w-full sm:col-span-3'>

          {/* Stats */}
          <div className="w-full p-5 bg-white shadow-xl rounded-xl">
            <div className="flex justify-around gap-8 px-3 text-lg font-medium text-center text-gray-700">
              <p><span className='text-2xl font-bold text-black'>{pokemon.stats[1].base_stat}</span> <br/>Attack</p>
              <p><span className='text-2xl font-bold text-black'>{pokemon.stats[2].base_stat}</span> <br/>Defense</p>
              <p><span className='text-2xl font-bold text-black'>{pokemon.stats[5].base_stat}</span> <br/>Speed</p>
            </div>
          </div>

          {/* Description */}
          <div className='my-10 '>
            <h1 className="px-3 pb-2 text-2xl font-bold text-justify">{pokemon.name.toUpperCase()}</h1>
          
            <p className='px-4 text-xl text-justify'>
              Magna irure elit laboris ullamco velit. Duis velit ut incididunt pariatur elit anim commodo nulla laboris laboris commodo pariatur. Mollit laboris sint adipisicing laborum qui ex aliquip. 
            </p>            
          </div>

          {/* Healt */}
          <div className="w-full p-5 mb-10 bg-white shadow-xl rounded-xl">
            <div className="flex justify-around gap-8 px-3 text-lg font-medium text-center text-gray-700">
              <p><span className='text-2xl font-bold text-black'>{pokemon.weight}</span> <br/>Peso</p>
              <p><span className='text-2xl font-bold text-black'>{pokemon.height}</span> <br/>Altura</p>
              <p><span className='text-2xl font-bold text-black'>{pokemon.game_indices[0].game_index}</span> <br/>Altura</p>
            </div>
          </div>
          
          {/* Abilities */}
          <div className="w-full p-5 mb-5 bg-white shadow-xl rounded-xl">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 ">Abilities:</h2>
            <hr  className='mb-3'/>
            <ul className="max-w-md px-4 space-y-1 text-xl text-gray-500 list-decimal list-inside">
              {pokemon.abilities.map((a) => 
                <li>
                  {a.ability.name}
                </li>
              )}
            </ul>
          </div>
          
          {/* Moves */}
          <div className="w-full p-5 mb-3 bg-white shadow-xl rounded-xl">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 ">Moves:</h2>
            <hr  className='mb-3'/>
            <ul className="max-w-md px-4 space-y-1 overflow-y-scroll text-xl text-gray-500 list-decimal list-inside max-h-64">
              {pokemon.moves.map((a) => 
                <li>
                  {a.move.name}
                </li>
              )}
            </ul>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default PokeData;
