export default function Modal({ species, closeModal }) {
  return (
    <div>
        <div>
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
    </div>
  )
}
