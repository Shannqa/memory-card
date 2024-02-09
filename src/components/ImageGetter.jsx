import React from "react";
import { useState, useEffect, Fragment } from "react";
import Card from "./Card.jsx";
import API_KEY1 from "../../key.js";
import { v4 as uuidv4 } from "uuid";


function ImageGetter({imgCount, images, setImages, onPick, fetchSwitch, setFetchSwitch}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${imgCount}&api_key=${API_KEY1}`)
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
      setTimeout(() => {
        const cards = document.querySelector(".cards");
        cards.classList.add("display");
        setIsLoading(false);
      }, 2000)
      
      // console.log(process.env.API_KEY);
    })
    .catch((error) => console.error(error));
  }, [imgCount, fetchSwitch]);
  
  return(
    <Fragment>
      {isLoading ? <div><img src ="./public/assets/ezgif-5-262ccda370.gif" /><p>Loading cats...</p></div> : null}
      <div className="cards">
        {images.map((img) => (
          <Card url={img.url} key={img.id} picked={img.picked} onPick={onPick} id={img.id}/>
        ))}  
      </div>
    </Fragment>
  )
}

export default ImageGetter