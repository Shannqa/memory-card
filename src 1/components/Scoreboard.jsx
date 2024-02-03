function Scoreboard(props) {
  return(
    <div className="scoreboard">
      <div>
        <span>Current score:</span>
        <span>{props.currentScore}</span>
      </div>
      <div>
        <span>Best score:</span>
        <span>{props.bestScore}</span>
      </div>
    </div>
  )
}