import React from 'react'
import './Weather.css'
import search_icon from "../Assets/search.png";
const Weather = () => {
  return(
<div className='container'>
      <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" >
          <img src={search_icon} alt="" />
        </div>
      </div>
      </div>
      )
}

export default Weather