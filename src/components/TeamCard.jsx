import React from 'react'

function TeamCard(props) {
  const {char} = props

  //just a way to try and find info, below to find artword
  // console.log(char.sprites.other["official-artwork"]["front_default"])
  
  //searching for types example
  // console.log(char.types[0].type.name)

  //iterating throgh types since there could be a lot
  let types = char.types.map((t,i) => {
    return <h5 className={`type ${t.type.name}`} key={i}>{t.type.name}</h5>
  })

  let stats = char.stats.map((s,i ) => {
    return <p key={s}>{s.stat.name} {s.base_stat}</p>
  })


  return (

    <div className='card'>
      <img src={char.sprites.other["official-artwork"]["front_default"]} alt="No Img Found" />
      <h3>{char.name}</h3>
      
      <div className='type-container'>
        {types}
      </div>

      <div>
        {stats}
      </div>
      
    </div>

  )
}

export default TeamCard