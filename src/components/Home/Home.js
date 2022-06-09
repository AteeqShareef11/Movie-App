import React, { useEffect } from 'react'
import Movielistining from "../Movielistining/Movielistining"
// import MovieApi from "../../common/apis/MovieApi"
// import {APIkey} from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux'
import { featcMoviesApi,featcShowsApi } from '../../features/movies/movieSlice'

const Home = () => {
  // const movieText = "Harry";
  const dispatch = useDispatch()
  const movieText = "Harry"
  const showText = "Friends"
  useEffect(() => {
    // const fetchMovies = async () => {

    //   const response = await MovieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`
    //   )
    //   .catch((err)=>{
    //      console.log("error : " ,err)
    //   });
  
    //    dispatch(addMovies(response.data));
    // };

    // fetchMovies();
    
    dispatch(featcMoviesApi(movieText))
    dispatch(featcShowsApi(showText))
 
  }, [dispatch]);
  return (
    <>
      <div className='img-banner'></div>
       <Movielistining/>
    </>
  )
}

export default Home