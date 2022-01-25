import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import './App.css'
import FeatureMovie from './components/FeatureMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista de filmes
      let list = await Tmdb.getHomeList()
      // console.log(list);
      setMovieList(list);
      
      // pegando o featured
      let topRated = list.filter(i => i.slug === 'top-rated')
      let randomChosen = Math.floor(Math.random() * (topRated[0].items.results.length - 1))
      let chosen = topRated[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      console.log(chosenInfo);
    }

    loadAll()
  }, [])

  return (
    <div className='page'>

      {featureData &&
        <FeatureMovie item={featureData}/>
      }
      

      <section className='lists'>
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}>

          </MovieRow>
        ))}
      </section>

      <footer></footer>
    </div>
  )
}
