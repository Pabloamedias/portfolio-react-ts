import { NavLink } from "react-router-dom";
import  "../assets/styles.css"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-purple" data-bs-theme="dark">
        <div className="container-fluid m-1">
          <NavLink className="navbar-brand" to={"/"}>
            Portafolio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={"/"}>
                  Mis Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/perfil"}>
                  Perfil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"#"}>
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank">
                  Curriculo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
