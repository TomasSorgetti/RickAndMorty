import React from 'react';
import Card from '../Card/Card';

const Cards = ({ characters }) => {

  return (
      <section className='w-11/12 m-auto flex flex-wrap justify-center gap-10'>
          {characters?.map(char => (
              <Card char={ char } key={char.id} />
          ))}
    </section>
  )
}

export default Cards