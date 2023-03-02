import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios'
import { API_Key, BaseIMG_URL } from '../constants/constants'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    var disp = Math.floor((Math.random()*10)+(Math.random()*10))
    axios.get(`/trending/movie/day?api_key=${API_Key}&language=en-US`).then((response)=>{
      console.log(response.data.results[disp]);
      setMovie(response.data.results[disp]);
    })
    
  }, [])
  
  return (
    
    <div 
    style={{backgroundImage:`url(${BaseIMG_URL}${movie ? movie.backdrop_path :""})`}}
    className='banner'>
        <div className='content'>
          <h1 className='title'>{movie && movie.title}</h1>
          <div className="banner_buttons">
          <button className='button'>Play</button>
          <button className='button'>My List</button>
          </div>
          <h1 className='description'> {movie && movie.overview}</h1>



        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner