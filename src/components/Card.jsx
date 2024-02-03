import React, { useState } from "react"
import "../styles/card.css"

function Card({ url, key, picked }) {
  
  function pickCard(key, picked) {
    
    
  }
  
  return(
    <div className="card">
    <img src={url} onClick={pickCard}/>
    </div>
  )
}

export default Card