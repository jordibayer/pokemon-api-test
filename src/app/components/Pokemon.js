import { useState } from "react";

export async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw "error";
  }
}

export function Pokemon(props) {
  const generations = {
    red: "First generation",
    blue: "First generation",
    yellow: "First generation",
    gold: "Second generation",
    silver: "Second generation",
    crystal: "Second generation",
    ruby: "Third generation",
    sapphire: "Third generation",
    emerald: "Third generation",
    firered: "Third generation",
    leafgreen: "Third generation",
    diamond: "Fourth generation",
    pearl: "Fourth generation",
    platinum: "Fourth generation",
    heartgold: "Fourth generation",
    soulsilver: "Fourth generation",
    black: "Fifth generation",
    white: "Fifth generation",
    "black-2": "Sixth generation",
    "white-2": "Sixth generation",
  };
  const [isShiny, setShiny] = useState(false);
  const handleShiny = () => {
    setShiny((prevValue) => !prevValue);
  };
  return (
    <div>
      <h1 className="mt-2 capitalize">{props.pokemon?.name}</h1>
      <p>{generations[props.pokemon?.game_indices[0]?.version?.name]}</p>
      <p>
        Height: {props.pokemon?.height} Weight: {props.pokemon?.weight}
      </p>
      <button className="btn bg-red-500 border-gray-50 rounded-sm border p-2 my-2" onClick={handleShiny}>
        Show {isShiny ? "default" : "shiny"}
      </button>
      {isShiny ? (
        <img className="w-44" src={props.pokemon?.sprites?.other["official-artwork"]?.front_shiny} alt="show shiny artwork of the pokemon" />
      ) : (
        <img className="w-44" src={props.pokemon?.sprites?.other["official-artwork"]?.front_default} alt="show default artwork of the pokemon" />
      )}
      <span>
        {props.pokemon?.stats.map((stat, index) => (
          <p key={index}>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </span>
      <br />
      <span>
        {props.pokemon?.types.map((type, index) => (
          <p key={index}>Type: {type.type.name}</p>
        ))}
      </span>
    </div>
  );
}
