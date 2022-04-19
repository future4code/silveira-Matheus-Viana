import React, { useState, useEffect } from "react";
import "../../styles.css";
import axios from "axios";

const PokeCard = (props) => {
  // valor do estado que guarda infos e foto do pokemon
  const [pokemonList, setPokemonList] = useState({});

  // método que roda após a montagem do componente
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(() => {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (pokemonList !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [pokemonList]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemonList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ContainerPokemonInfo">
      <p>{pokemonList.name}</p>
      <p>{pokemonList.weight} Kg</p>
      {pokemonList.types && <p>{pokemonList.types[0].type.name}</p>}
      {pokemonList.sprites && (
        <img src={pokemonList.sprites.front_default} alt={pokemonList.name} />
      )}
    </div>
  );
};

export default PokeCard;
