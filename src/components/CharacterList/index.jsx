import React from 'react'
import './index.css';
import CharacterBox from '../CharacterBox';
import Loading from '../Loading';

function CharacterList({isLoading, data}) {
  //console.log(data[0]);
  return isLoading ? (
  <Loading />
  )
  : ( 
    <section className='cards'>
    {data && data.map((character) => (
      <CharacterBox isLoading={isLoading} key={character.char_id} character={character} />
    ))}
  </section>
    )
}

export default CharacterList;