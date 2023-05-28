"use client";
import Image from "next/image";
import { Pokemon, Fetchapi } from "./components/Pokemon";

export default function Home() {
  return (
    <main className="p-2 m-2">
      <nav className="bg-red-500 text-center text-4xl p-2">POKETEST</nav>
      <Fetchapi />
      <Pokemon
        name="Pikachu"
        height="5"
        weight="20"
        id="16"
        stats={{
          0: { base_stat: "48", stat: { name: "hp" } },
          1: { base_stat: "48", stat: { name: "attack" } },
          2: { base_stat: "48", stat: { name: "defense" } },
          3: { base_stat: "48", stat: { name: "special-attack" } },
          4: { base_stat: "48", stat: { name: "special-defense" } },
          5: { base_stat: "48", stat: { name: "speed" } },
        }}
        artworks={{
          default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
          shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
        }}
        types={{
          0: {
            slot: "1",
            type: {
              name: "normal",
            },
          },
        }}
      />
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
