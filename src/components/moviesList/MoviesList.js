import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies,match,history}) => {
    return (
        <div className="movies">
            {movies.map((movie, key) => <MovieCard movie={movie} key={movie.id} /> )}
        </div>
    )
}

export default MoviesList
