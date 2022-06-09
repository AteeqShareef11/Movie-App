import React from 'react'
import {useParams} from "react-router"
import {useDispatch , useSelector} from "react-redux"
import {useEffect} from "react"
import {featcMoviesDetailApi , getSelectedMovie , removeSelectedMovie} from '../../features/movies/movieSlice';
import "./MovieDetail.scss"

const MovieDetail = () => {

  const {imdbID} = useParams();
  console.log("imdbid",imdbID)
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log("data",data)

  useEffect(() => {
     dispatch(featcMoviesDetailApi(imdbID));
     return () => {
      dispatch(removeSelectedMovie());
     };
  }, [dispatch,imdbID]);

  return (
    <>
      <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>....Loading</div>
      ) :(
        <>
        <div className="section-left">
          <div className="title">{data.Title}</div>
          <div className="movie-rating">
             <span>IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}</span>
             <span>IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}</span>
             <span>Runtime <i className="fa fa-film"></i> : {data.Runtime}</span>
             <span>Year <i className="fa fa-calendasr"></i> : {data.Year}</span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Starts</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title}/>
        </div>
        </>
      )}
  
      </div>
    </>
  )
}

export default MovieDetail