import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
     <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>
        
        <Footer></Footer>
      </Router> 
     
    </div>
  );
}

export default App;
