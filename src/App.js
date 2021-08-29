import './App.css';
import {useState} from "react"
import { Data } from './components/Data';
import MoviesList from './components/moviesList/MoviesList';
import AddMovie from './components/add/AddMovie';
import Header from './components/header/Header';
import { Route } from 'react-router-dom';
import Trailer from './components/Trailer';

function App() {
  const [movies, setMovies] = useState(Data)
  const handleMovie = (newMovie) => {
      setMovies([...movies, newMovie])
  }
  
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={(props)=> <MoviesList movies={movies} {...props}/>} />
      <Route exact path="/movie:id" render={(props)=> <Trailer movies={movies} {...props}/>} />
      {/* <Route exact path="/" component={<Header/>} /> */}
      {/* <Header />
      <MoviesList movies={movies}/>
      <AddMovie handleMovie={handleMovie}/> */}
    </div>
  );
}

export default App;

