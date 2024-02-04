import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import API_KEY from "../../key.js";
import { v4 as uuidv4 } from "uuid";


function ImageGetter({imgCount, images, setImages, onPick, fetchSwitch, setFetchSwitch}) {

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${imgCount}&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const imgList = data.map((obj) => {
        return {
          id: uuidv4(),
          url: obj.url,
          picked: false
        }
      });
      
      setImages(imgList);
    });
  }, [imgCount, fetchSwitch]);
  
  return(
    <div className="cards">
      {images.map((img) => (
        <Card url={img.url} key={img.id} picked={img.picked} onPick={onPick} id={img.id}/>
      ))}  
    </div>
  )
}

export default ImageGetter