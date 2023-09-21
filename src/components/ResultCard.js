import React from 'react'
import './ResultCard.css'
import { useMovieContext } from './context/GlobalContext'
import * as actions from '../components/context/ActionTypes'
function ResultCard({ movie }) {
    const MovieContext = useMovieContext();
    const storedMovieWatchlist = MovieContext.watchlist.find(
        (o) => o.imdbID === movie.imdbID)
    const storedMovieWatched = MovieContext.watched.find(
        (o) => o.imdbID === movie.imdbID)
    const watchlistDisabled = storedMovieWatchlist ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;
  return (
      <div className='result-card'>
          <div className='poster-wrapper'>
              {
                  movie.Poster ? <img src={movie.Poster} alt={movie.Title} />
                  :(<div className='filter-poster'></div>)
              }
          </div>
          <div className='info'>
              <div className='heading'>
                  <h3 className='title'>{movie.Title}</h3>
                  {movie.Year ? <h4 className='release-date'>{movie.Year}</h4>:"-"}
              </div>
               <div className='controls'>
                  <button className='btn' disabled ={watchlistDisabled} onClick={() => MovieContext.MoviesDispatch({
                      type: actions.ADD_MOVIE_TO_WATCHLIST,
                      payload: movie,
              })}>Add To Watchlist</button>
                  <button className='btn' disabled ={watchedDisabled} onClick={() => MovieContext.MoviesDispatch({
                      type: actions.ADD_MOVIE_TO_WATCHED,
                      payload:movie,
              })}>Add To Watched</button>
          </div>
          </div>
         
    </div>
  )
}

export default ResultCard