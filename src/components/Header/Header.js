import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'
// import user from '../../images/user.png'
import './Header.scss'
import { useDispatch } from 'react-redux/es/exports'


const Header = () => {

  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(keyword))
    // console.log(dispatch(fetchAsyncMovies(keyword)))
    dispatch(fetchAsyncSeries(keyword))
    setKeyword('')
  }
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>Arsene's Movie App</div>
      </Link>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={keyword} placeholder='Search Movies & Series...' onChange={(e) => setKeyword(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
      </div>
      {/* <h1>{keyword}</h1> */}
      {/* <div className='user-image'>
        <img src={user} alt='user'/>
      </div> */}
    </div>
  )
}

export default Header