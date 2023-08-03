export default function Species({ species, showModal }) {

  return (
    <div className="individualPlantDiv">
      <img className="plant-images" onClick={() => showModal(species)} src={species.image} alt={species.speciesName} />
      <p className="species-name" onClick={() => showModal(species)}>{species.speciesName}</p>
    </div>
  )
}