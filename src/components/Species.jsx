export default function Species({ species }) {
  return (
    <div>
      <img className="plant-images" src={species.image} alt={species.speciesName}/>
    </div>
  )
}
