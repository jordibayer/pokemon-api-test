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
  const handleButtonClick = async (event) => {
    event.preventDefault();
    await handleFetchPokemon();
  };
  useEffect(() => {
    handleFetchPokemon();
  }, []);

  return (
    <main className="p-2 m-2">
      <nav className="bg-red-500 text-center text-4xl p-2">POKETEST</nav>
      <form onSubmit={handleButtonClick}>
        <label>
          Choose your pokemon:
          <input className="m-2 text-black" type="text" value={inputValue} onChange={handleInputChange} />
          <button className="btn bg-red-500 border-gray-50 rounded-sm border p-2 my-2 disabled:bg-slate-500" type="submit" disabled={!inputValue} onClick={handleButtonClick}>
            Search pokemon
          </button>
        </label>
      </form>
      {isLoading ? <p>Loading pokemon...</p> : isError ? <p>Something went wrong (maybe you misstyped the pokemon?)</p> : pokemon && <Pokemon pokemon={pokemon} />}
    </main>
  );
}
