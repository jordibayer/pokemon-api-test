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
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };
  const handleButtonClick = (event) => {
    const pokemonApiInfo = fetchIt(inputValue);
    console.log(pokemonApiInfo);
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

export function Pokemon(props) {
  const [isShiny, setShiny] = useState(false);
  const handleShiny = () => {
    setShiny((prevValue) => !prevValue);
  };
  const stats = props.stats;
  const listStats = [];
  for (let i in stats) {
    listStats.push(
      <p key={stats[i].stat.name}>
        {stats[i].stat.name}: {stats[i].base_stat}
      </p>
    );
  }
  const types = props.types;
  const listTypes = [];
  for (let i in types) {
    listTypes.push(<p key={types[i].type.name}>Type: {types[i].type.name}</p>);
  }
  return (
    <div>
      <h1 className="mt-2">{props.name}</h1>
      <p>
        Height: {props.height} Weight: {props.weight}
      </p>
      <button className="btn bg-slate-500 border-gray-50 rounded-sm border p-2" onClick={handleShiny}>
        Show {isShiny ? "default" : "shiny"}
      </button>
      {isShiny ? <img className="w-44" src={props.artworks.shiny} /> : <img className="w-44" src={props.artworks.default} />}
      <span>{listStats}</span>
      <br />
      <span>{listTypes}</span>
    </div>
  );
}
