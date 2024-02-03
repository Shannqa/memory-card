import React, { useState } from "react"

function Card({ url, picked, onPick, id }) {
  
  function pickCard(picked) {
    
    
  }
  
  return(
    <div className="card" >
      <img src={url} onClick={onPick} id={id}/>
    </div>
  )
}

export default Card