function Game() {
  const [images, setImages] = useState([]);
  const imgCount = 6;
  let currentCount = 0;
  const round = 0;
  const currentScore = 0;
  const bestScore = 0;
  
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
  
  handlePick(array, imgID) {
    array find with id
    picked === true {
      return loseGame();
    }
    set picked to true 
    currentCount++
    if currentCount === imgCount {
      return roundWin()
    } else {
    shuffleImages()
    }
  }
  return(
    <div>
    <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
    <ImageGetter count={imgCount} list={images} setter={setImages}/>
    </div>
  )
}