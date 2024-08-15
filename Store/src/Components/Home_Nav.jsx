import React from 'react'

function Home_Nav() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About-Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Items</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">fast food</a></li>
              <li><a className="dropdown-item" href="#">Khulla</a></li>
              <li><a className="dropdown-item" href="#">Cold Drinks</a></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Home_Nav