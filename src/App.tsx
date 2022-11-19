import React, { useState } from 'react';
import './App.css';
import { MovieName } from './types';
import NumberMovies from './components/Movies/NumberMovies';


function App() {

  const [Movies , setMovies] = useState<MovieName[]>([])

  const movie  = {
    name: ''
  }

  const nameMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    movie.name = event.target.value
  }

  const newMovie = () => {
    setMovies(prev => [...prev , movie])
  }
  return (
    <div className="App">
      <input onChange={e => nameMovie(e)} style={{margin:'10px'}} type="text"/>
      <button onClick={newMovie}>Add</button>
      <NumberMovies Movies={Movies}/>
    </div>
  );
}

export default App;
