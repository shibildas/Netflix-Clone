import React, {useState, useEffect} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../axios'
import {API_Key, BaseIMG_URL } from '../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]= useState()
  useEffect(() => {
    
    axios.get(props.url).then((res)=>{
      console.log(res.data);
      setMovies(res.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  
   
  }, [])

  const opts={
    height:'390',
    width: '100%',
    playerVars:{

      autoplay:1,
    },
  };
  const handleMovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then ((res)=>{
  console.log(res.data.results)
    if(res.data.results.length !==0){
      setUrlId(res.data.results[0])
    }else{
      console.log('Empty trailers');
    } 
  })
}
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((mov)=>
          
          <img key={mov.id} onClick={()=>handleMovie(mov.id)} className={props.isSmall ? 'smallposter':'poster'} src={`${BaseIMG_URL+mov.backdrop_path}`} alt="Poster" />
        )}
      </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key}/> }

    </div>
  )
}

export default RowPost