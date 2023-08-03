import OverlayBlur from "./OverlayBlur"

export default function Modal({ species }) {
  return (
    <div>
      <OverlayBlur />
      <div className="modal-container">

        <img className="modal-image" src={species.image}></img>

        <div>
          <p>{species.speciesName}</p>
          <p>{species.commonName}</p>
          <p>{species.genusName}</p>
        </div>

        <button>x</button>

      </div>
    </div>
  )
}
