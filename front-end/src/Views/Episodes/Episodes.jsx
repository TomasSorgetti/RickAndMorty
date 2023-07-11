import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getEpisode } from '../../redux/actions/actions'
import axios from 'axios'

const Episodes = () => {
  const dispatch = useDispatch()
  const { episode } = useSelector(state => state)
  const [count, setCount] = useState(1)
  const [id, setId] = useState(1)
  const URL_EPISODE = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const countEpisodes = async () => {
      await axios.get("https://rickandmortyapi.com/api/episode")
        .then((response) => {
          setCount(response.data)
        } )
    }
    dispatch(getEpisode(URL_EPISODE));
    countEpisodes()
  }, [])


  return (
    <section>
      {episode ?
        <article>
          <h1>{episode.name}</h1>
          <p>{ episode.air_date}</p>
          <p>{ episode.episode}</p>
          <p>{ episode.created}</p>
      </article>
        : <p>Loading...</p>}
    </section>
  )
}

export default Episodes