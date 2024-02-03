import React, { useState, useEffect } from "react"

function ImageGetter() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setImages(data);
      
    });
  }, []);
  
  return(
    <div>lala</div>
  )
}

export default ImageGetter