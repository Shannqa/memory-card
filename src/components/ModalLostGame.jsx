function ModalLostGame({handler}) {

  return(
    <div className="modal" id="modal-lost">
      <div className="modal-content">
        Game over!
        <button onClick={handler}>Play again</button>
      </div>
    </div>
    
  )
}

export default ModalLostGame