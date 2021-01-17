import React from 'react';
import axios from './axios_func';
import REQUESTS from './request';
import {useState, useEffect} from 'react';
import "./Banner.css";

function Banner() {

    const [state, setstate] = useState([]);
    useEffect(() => {
       async function fetchData_banner(){
            const requestt = await axios.get(REQUESTS.fetchMovies);
            setstate(requestt.data.results[Math.floor(Math.random() * 6) + 1 ]);
       }
       fetchData_banner();
    }, []);

    console.log(state);
    return (
        
        <header className="banner"  
        
        style={{
            
                width:"100%",
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${state.poster_path}")`  ,
                backgroundPosition: "50% 10%",
            
        }}
        
        >
           
 <div className="banner_stuff">
     <div>
     <h1 className="banner_title"> {state?.title}</h1>
    <h5 className="banner_desc">{state?.overview}</h5>
    <div className="banner_btns">
        <button className="banner_btn">Play</button>
        <button className="banner_btn">Download poster</button>
        
    </div>
     </div>
   
            </div>
             
        </header>
    )
}

export default Banner
