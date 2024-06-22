import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">CRUD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              
            </ul>
           <button className='btn btn-outline-secondary my-2 my-sm-0' onClick={() => navigate("/create")} >Create</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar