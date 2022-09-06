import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'
import Slider from "react-slick";
import { settings } from '../../common/carouselSettings'

const MovieListing = () => {

  

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  // console.log( movies)
  // console.log( shows)
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        {/* MOVIES */}
        <h2>MOVIES <span style={{fontSize:'0.7em', display: 'block'}}> (Slide for more ...)</span> </h2>
        <div className='movie-container'>
          <Slider {...settings}>
            {movies.Response === 'True' ? 
              movies.Search.map((item, index) => (
                <MovieCard key={index} data={item}/>
              )) : 
              <div className='movies-error'><h3>Something wrong happened... Please type another word</h3> </div> }
          </Slider>
        </div>
      </div>
      {/* SHOWS */}
      <div className='show-list'>
        <h2>SHOWS <span style={{fontSize:'0.7em', display: 'block'}}> (Slide for more ...)</span></h2>
        <div className='movie-container'>
        <Slider {...settings}>
          {shows.Response === 'True' ? shows.Search.map((item, index) => (
          <MovieCard key={index} data={item}/>
        )) : <div className='movies-error'><h3>Something wrong happened... Please type another word</h3> </div> }
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing