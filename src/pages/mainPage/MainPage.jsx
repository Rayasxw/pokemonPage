
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import styles from './MainPage.module.css'
export default function MainPage() {

    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    const limit = 12
    const page = offset / limit + 1
    const URL = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        axios.get(`${URL}?limit=${limit}&offset=${offset}`).then((response) => {
            setPokemon(response.data.results)
        })
    }, [offset])
    console.log(pokemon);
    
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Pokemon</h1>
        <hr className={styles.hr} />
        <div className={styles.pokemonList}>
            {pokemon.map((poke, index) => 
                <PokemonCard key={index} name={poke.name} url={poke.url}/>
               
            )}
        </div>
        <div className={styles.buttons}>
            <button className={styles.btn} onClick={() => setOffset(offset - limit)} disabled={page === 1}>Previous</button>
            <span className={styles.page}> {page}</span>
            <button className={styles.btn} onClick={() => setOffset(offset + limit)} disabled={pokemon.length < limit}>Next</button>
        </div>
        
    </div>
  )
}
