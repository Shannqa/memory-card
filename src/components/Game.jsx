import { useState } from "react";
import Scoreboard from "./Scoreboard.jsx";
import ImageGetter from "./ImageGetter.jsx";

function Game() {
  const [images, setImages] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imgCount, setImgCount] = useState(6);

  let currentCount = 0;
  const round = 0;
  
  function shuffleImages(array) {
    // Fisher-Yates shuffle
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array;
  }

  function handlePick(e) {
    console.log(e.target.id);
    // check if the image has already been picked
    const pickedImage = images.find((img) => img.id === e.target.id);

    if (pickedImage.picked === true) {
      return lostGame();
    } 

    const setAsPicked = images.map((img) => {
      if (img.id === e.target.id) {
        return {
          ...img,
          picked: true
        }         
      } else {
        return img;
      } 
    });
    setImages(shuffleImages(setAsPicked))
    winTurn();
    console.log(images);
  }  

  function lostGame() {
    console.log("sorry!");
    setCurrentScore(0);
    setImgCount(6);
  }

  function winTurn() {
    setCurrentScore(currentScore + 1)

    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  return(
    <div>
    <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
    <ImageGetter imgCount={imgCount} images={images} setImages={setImages} onPick={handlePick}/>
    </div>
  )
}

export default Game