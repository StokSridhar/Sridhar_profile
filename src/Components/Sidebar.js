
const Sidebar = () => {
  return (
    <div className="sidebarmain">
        <nav className="navbar navbar-expand-lg">
  <div className="sidemanuctrls"> 
    <span className="d-block d-lg-none">Sridhar S</span> 
    <span className="d-none d-lg-block profilebadge"><img className="rounded mx-auto mb-2" src="./profile.jpg" alt="" /></span>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#certifications">Certifications</a>
        </li> 
        
      </ul> 
    </div>
  </div>
</nav>
    </div>
  )
}

export default Sidebar