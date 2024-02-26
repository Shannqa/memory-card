import Scoreboard from "./Scoreboard.jsx";

function Header(props) {
    
  return(
    <div className="header">
      <h1>Memory Game</h1>
      <p>Don't click on the same image twice to earn points!</p>
      <Scoreboard currentScore={props.currentScore} bestScore={props.bestScore} round={props.round} />
    </div>
  )
}

export default Header