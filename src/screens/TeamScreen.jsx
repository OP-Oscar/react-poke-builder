import React, {useContext} from 'react'
import TeamCard from '../components/TeamCard'
import PokemonContext from '../state/PokemonContext'

function TeamScreen() {
  const {state} = useContext(PokemonContext)

  let teamDisplay = state.team.map((char, index)=>{
    return <TeamCard char={char} key={index}/>
  })

  return (
    <div>
      <h1>My Team</h1>
      {teamDisplay}
    </div>
  )
}

export default TeamScreen