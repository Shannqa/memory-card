import React, { useState } from "react"
//import "../styles/card.css"

function Card({ url, key, picked }) {
  
  function pickCard(key, picked) {
    
    
  }
  
  return(
    <div><p>aa</p>
    <img src={url} className="card" onClick={pickCard}/>
    </div>
  )
}

export default Card