import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Pokemon.module.css'

const PokemonCard = ({name, url}) => {
    const [image, setImage] = useState('')

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await axios.get(url)
            setImage(response.data.sprites.other.dream_world.front_default)
        }
        fetchPokemonDetails()
    }, [url])

  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt={name} />
        <h2 className={styles.text}>{name}</h2>
       
    </div>
  )
}

export default PokemonCard