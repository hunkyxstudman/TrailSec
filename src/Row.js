import React from 'react'
import {useState, useEffect} from 'react';
import axios from './axios_func';
import "./Row.css";

const imgBaseURL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {

    //def state = movie
   const [state, setstate] = useState([]);
   useEffect(() => {
      async function fetchTheData(){
          const requestt = await axios.get(fetchUrl);
       //   console.log(requestt.data.results);
          setstate(requestt.data.results);
          return requestt;
      }
      fetchTheData(); 
   }, [fetchUrl]) ;//alwys incluede external variables since its depended on avariable outside useeffect block
// console.log(state);
    return (
        <div className="row">  
            <h1 className="row_titles">
                {title}
            </h1>
            <div className="row_posters">
                {
                    state.map(movie =>(<img 
                       key={movie.id}
                        className="row_poster" src={`${imgBaseURL}${movie.poster_path}`} alt={movie.title}></img>))
                }
            </div>
        </div>
    )
}

export default Row
