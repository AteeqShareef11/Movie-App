import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { featcMoviesApi, featcShowsApi } from '../../features/movies/movieSlice';
import User from "../../imgaes/ateeq.jpg"
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [inputTerm,setInputTerm] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("inputTerm",inputTerm)
    dispatch(featcMoviesApi(inputTerm));
    dispatch(featcShowsApi(inputTerm));
    setInputTerm("");
       
  }
  return (
    <>
    <div className='header'>
    
    <div className='logo'>
      <Link to=""> Movie App </Link>
    </div>

    <div className='search-bar'>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Search Movie From Here" value={inputTerm} onChange={(e)=> setInputTerm(e.target.value)}/>
        <button type='submit'><i className='fa fa-search'></i></button>
      </form>
    </div>
   
      
      <div className='user-img'>
        <img width="100%" src={User} alt=""/>
      </div>
    </div>

    </>
  )
}

export default Header