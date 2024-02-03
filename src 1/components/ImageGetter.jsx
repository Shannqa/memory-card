import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import API_KEY from "../../key.js";

function ImageGetter({imgCount, images, setImages}) {
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${imgCount}&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const imgList = data.map((obj) => {
        return {
          id: uuid(),
          url: obj.url,
          picked: false
        }
      });
      
      setImages(imgList);
    });
  }, [imgCount]);
  
  return(
    <div>
    {images.map((img) => (
      <Card url={img.url} key={img.id} picked={img.picked}/>
    ))}

    
    </div>
  )
}

export default ImageGetter