import React, { useEffect } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux/es/exports'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'


const Home = () => {

  const movieText = 'captain'
  const seriesText = 'love'

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncSeries(seriesText))
    // fetchMovies()
  }, [dispatch])


  return (
    <div className='home'>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home