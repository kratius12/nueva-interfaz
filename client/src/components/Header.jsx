import Logo from "../assets/img/logo.png";



export default function Header() {
  return (

    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-white" href="#">
      <img
        src={Logo}
        className="d-inline-block align-text-top w-50"
      />
    </a>
    <button
      className="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="navbar-nav">
      <div className="nav-item text-nowrap">
        <a className="nav-link px-3" href="#">
          Perfil
        </a>
      </div>
    </div>
  </header>
  )
}
