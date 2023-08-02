export default function Species({ species }) {
  return (
    <div className="individualPlantDiv">
      <img className="plant-images" src={species.image} alt={species.speciesName} />
      <p>{species.speciesName}</p>
    </div>
  )
}
