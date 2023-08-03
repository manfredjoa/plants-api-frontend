import { useState } from "react"
import Modal from "./Modal.jsx"

export default function Species({ species }) {
  const [modal, setModal] = useState(null)
  
  const showModal = () => {
    setModal(true)
  }

  return (
    <div className="individualPlantDiv">
      <img className="plant-images" onClick={showModal} src={species.image} alt={species.speciesName} />
      <p className="species-name" onClick={showModal}>{species.speciesName}</p>
      {modal ? <Modal species={species}  /> : <></> }
    </div>
  )
}