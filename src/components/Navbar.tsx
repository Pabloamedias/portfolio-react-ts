import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to={"/"}>Portafolio</NavLink>
                <NavLink className="btn btn-outline-primary" to={"/profile"}>Mi Perfil</NavLink>
                <NavLink className="btn btn-outline-primary" to={"/contact"}>Contacto</NavLink>
                <NavLink className="btn btn-outline-primary" to={"/Curriculo"}>Blog</NavLink>
            </div>

        </div>
    )
}

export default Navbar