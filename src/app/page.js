"use client";
import Image from "next/image";
import { Pokemon, fetchPokemon } from "./components/Pokemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [inputValue, setInputValue] = useState("pikachu");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetchPokemon() {
    try {
      if (!inputValue) return;
      setIsError(false);
      setIsLoading(true);
      const pokemonApiInfo = await fetchPokemon(inputValue);
      setPokemon(pokemonApiInfo);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };
  const handleButtonClick = async () => {
    await handleFetchPokemon();
  };
  useEffect(() => {
    async function load() {
      await handleFetchPokemon();
    }
    load();
  }, []);

  return (
    <main className="p-2 m-2">
      <nav className="bg-red-500 text-center text-4xl p-2">POKETEST</nav>
      <label>
        Choose your pokemon:
        <input className="m-2 text-black" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="btn bg-red-500 border-gray-50 rounded-sm border p-2 my-2 disabled:bg-slate-500" disabled={!inputValue} onClick={handleButtonClick}>
          Search pokemon
        </button>
      </label>
      {isLoading ? <p>Loading pokemon...</p> : isError ? <p>Something went wrong (maybe you misstyped the pokemon?)</p> : pokemon && <Pokemon pokemon={pokemon} />}
    </main>
  );
}

// height, weight, id, name,sprites {other { official-artwork {front_default,front_shiny}}}, stats{base_stat, stat{name}}, types{type{name}},
/* import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </button>
      </label>
      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber}.</p>
      }
    </>
  );
}
 */

/* export async function fetchapi(pokemonName) {
  async function fetchPokemon(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw "error";
    }
  }

  const pokemon = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return pokemon;
}
 */
