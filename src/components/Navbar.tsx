import { NavLink } from "react-router-dom";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-purple" data-bs-theme="dark">
        <div className="container-fluid m-1">
          <NavLink className="navbar-brand fs-4 fw-bold" to={"/"}>
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
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                >
                  Mis Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/perfil"}>
                  Perfil
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Contacto
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://drive.google.com/file/d/1O3Whs8wUS8YgJesjPpY_K6rCx-BhmFob/view?usp=sharing" target="_blank">
                  Curriculo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Puedes contactarme en las siguientes plataformas:</h1>
      </div>
      <div className="modal-body">
        <h5 className="font-purple">Correo:</h5>
        <h6>p.olmedosaez@gmail.com</h6>
        <h5 className="font-purple">Telefono:</h5>
        <h6>+569 57116030</h6>
        <h5 className="font-purple">LinkedIn:</h5>
        <a href="https://www.linkedin.com/in/pablo-olmedo-7655a5218/" target="_blank">
          <h6>https://www.linkedin.com/in/pablo-olmedo-7655a5218/</h6>
        </a>
        <h5 className="font-purple">GitHub:</h5>
        <a href="https://github.com/Pabloamedias/" target="_blank">
          <h6>https://github.com/Pabloamedias</h6>
        </a>
      </div>
      <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
