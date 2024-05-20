import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 gap-1">

        <h1 className="font-purple fw-bold">404</h1>
        <h2>Oops! parece que te perdiste navegando</h2>
        <h5 className="font-purple">Vuelve a la pagina de inicio con el botón de abajo</h5>
        <NavLink className="btn btn-purple" to={"/"}>Volver</NavLink>
      </div>
    </>
  );
};

export default NotFound;
