function ModalNextRound({handler}) {

  return(
    <div className="modal" id="modal-round">
      <div className="modal-content">
        Good job! 
        <button onClick={handler}>Next round</button>
      </div>
    </div>
    
  )
}

export default ModalNextRound