import { useState, useEffect } from "react";
import { getSpecies } from "../services/species.js";
import { Link } from "react-router-dom";
import Species from "../components/Species.jsx"
import Modal from "../components/Modal.jsx";

export default function AllSpecies() {
  const [species, setSpecies] = useState([])
  const [modal, setModal] = useState(false)
  const [oneSpecies, setOneSpecies] = useState({})
  
  useEffect(() => {
    fetchSpecies()
  }, [])
  
  async function fetchSpecies() {
    const allSpecies = await getSpecies()
    setSpecies(allSpecies)
  }
 
  const showModal = (spec) => {
    setOneSpecies(spec)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const closeModalKeyDown = (e) => {
    if (e.key === "Escape") {
      setModal(false)
    }
  }
    
  return (
    <div className="plants-screen">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Plant Species</h1>
      </Link>
      <div className="plants-container">
        {species.map((eachSpecies) => (
          <Species species={eachSpecies} key={eachSpecies._id} showModal={showModal} />
        ))}
      </div>
      {modal ? <Modal species={oneSpecies} closeModal={closeModal} closeModalKeyDown={closeModalKeyDown}/> : null }
    </div>
  )
}
