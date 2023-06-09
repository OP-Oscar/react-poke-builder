import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import DexCard from '../components/DexCard';



function DexScreen({}) {
    const [allPokemon, setAllPokemon] = useState([]);




    useEffect( () => {
        // this useEffect is protecting this block of code form that renders

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then( (res) => {
            // console.log(res.data.results)
            setAllPokemon(res.data.results)
        })

        console.log("Render")

    }, [])

    const pokeDisplay = allPokemon.map((pokemon, index)=> {
        return <DexCard pokemon={pokemon}
        key={`${pokemon.name}`}/>
    })

  return (
    <div>
        <h1>PokeDex</h1>
        {pokeDisplay}
    </div>
  )
}

export default DexScreen