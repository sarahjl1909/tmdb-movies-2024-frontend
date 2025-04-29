import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import MovieCard from './components/MovieCard/MovieCard'

function App() {

  return (
    <div className="App">
      <Navbar />
      <MovieCard />

      <MovieCard />
      <Footer />
    </div>
  
  )
}

export default App
