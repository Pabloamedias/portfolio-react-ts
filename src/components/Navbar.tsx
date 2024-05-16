import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <ul className="navbar-nav m-1">
        <li className="nav-item ">
          <NavLink className="nav-link" to={"/"}>
            Portafolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/perfil"}>
            Perfil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/contacto"}>
            Contacto
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/curriculo"}>
            Curriculo
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
