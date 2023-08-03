import { useEffect, useRef } from "react"

export default function Modal({ species, closeModal, closeModalKeyDown }) {
  const ref = useRef(null)
  
  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div tabIndex={0} ref={ref} onKeyDown={closeModalKeyDown}>
      <div className="overlay hidden" onClick={closeModal}></div>
      <div className="modal-container">

        <img className="modal-image" src={species.image}></img>

        <div>
          <p className="modal-text">Species name: {species.speciesName}</p>
          <p className="modal-text">Common name: {species.commonName}</p>
          <p className="modal-text">Genus name: {species.genusName}</p>
        </div>

        <button onClick={closeModal}>x</button>

      </div>
    </div>
  )
}
