import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-screen">
      <h1>Plant Species</h1>

      <Link to="/species" style={{ textDecoration: "none" }}>
        <h2>Click here to see some plant species!</h2>
      </Link>
    </div>
  )
}