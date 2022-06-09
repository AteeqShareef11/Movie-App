import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows} from '../../features/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./Movielistining.scss"
import Slider from "react-slick"
import {setting} from "../../common/setting"

const Movielistining = () => {

 


  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
   movies.Search.map((movie,index)=>(
    <MovieCard key={index} data={movie}/>
   ))
) :
( 
<div className="movies-error">
  <h3>
    {movies.error}
 </h3>
</div> 
)
let renderShows = "";
renderShows = shows.Response === "True" ? (
 shows.Search.map((movie,index)=>(
  <MovieCard key={index} data={movie}/>
 ))
) :
( 
<div className="movies-error">
<h3>
  {movies.error}
</h3>
</div> 
)
  return (
    <>
     <div className='movie-wrapper'>
       <div className='movie-list'>
         <h2>Movies</h2>
         <div className='movie-container'>
         <Slider {...setting}>{renderMovies}</Slider>
         </div>
       
       </div>
       <div className='show-list'>
         <h2>shows</h2>
         <div className='movie-container'>
         <Slider {...setting}> {renderShows}</Slider>
         </div>
       </div>
     </div>
    </>
  )
}

export default Movielistining