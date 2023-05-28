import { useState } from "react";

export function Fetchapi(props) {
  async function fetchIt(pokemonName) {
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
  const [inputValue, setInputValue] = useState("pikachu");
  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
  };
  const handleButtonClick = (event) => {
    const pokemonApiInfo = fetchIt(inputValue);
  };
  return (
    <label>
      Choose your pokemon:
      <input className="m-2 text-black" type="text" value={inputValue} onChange={handleInputChange} />
      <button className="btn bg-slate-500 border-gray-50 rounded-sm border p-2 m-2" onClick={handleButtonClick}>
        Search pokemon
      </button>
    </label>
  );
}
