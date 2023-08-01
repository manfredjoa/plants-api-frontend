import { useState, useEffect } from "react";
import { getSpecies } from "../services/species.js";
import Species from "../components/Species.jsx"

export default function AllSpecies() {
  const [species, setSpecies] = useState([])

  useEffect(() => {
    fetchSpecies()
  }, [])
  
  async function fetchSpecies() {
    const allSpecies = await getSpecies()
    setSpecies(allSpecies)
  }

  return (
    <div>
      <h1>Plant Species</h1>
      <div className="plants-container">
        {species.map((eachSpecies) => (
          <Species species={eachSpecies} key={eachSpecies._id} />
        ))}
      </div>
    </div>
  )
}