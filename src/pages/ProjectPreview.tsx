import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import actualProjects from "../utils/actualProjects";
import "../assets/styles.css";
import { useState, useEffect } from "react";

const ProjectPreview = () => {
  const [showAlert, setShowAlert] = useState(false);

  const { slug } = useParams();
  const project = actualProjects.find((project) => project.slug === slug);
  if (project === undefined) {
    return <NotFound />;
  }
  useEffect(() => {
    if (!project.urlDeployed) {
      setShowAlert(true);
    }
  }, [project]);

  return (
    <>
      <div className="container">
        <h1 className="font-purple text-center fw-bold m-3">{project.title}</h1>
        <div className="m-3 border border-dark rounded">
          <img className="img-fluid rounded " src={project.urlImage} alt="" />
        </div>
        <p className="my-4 h6">{project.body}</p>
        <div className="d-grid gap-2">
          <a
            href={project.urlDeployed}
            target="_blank"
            className={`btn btn-purple ${!project.urlDeployed && "disabled"}`}
          >
            <i className="fa-solid fa-magnifying-glass m-1 me-1" />
            Probar proyecto {!project.urlDeployed && "*"}
          </a>
          <a
            href={project.urlGitHub}
            target="_blank"
            className="btn btn-purple"
          >
            <i className="fa-brands fa-github m-1 me-1" />
            Ir al repositorio
          </a>
          <Link
            to={"/"}
            className="btn btn-purple"
          >
            <i className="fa-solid fa-house m-1 me-1" />
            Volver a los proyectos
          </Link>

        </div>
        <div
          id="myAlert"
          className={`alert alert-secondary text-center m-3 alert-dismissible fade ${
            showAlert ? "show" : ""
          }`}
          role="alert"
        >
          * Este proyecto actualmente no se encuentra desplegado, por lo que no
          puedes probarlo directamente con un enlace. Te invito a abrir el
          repositorio, seguir las instrucciones del README y probar localmente
          el proyecto.
          <button
            type="button"
            className="btn-close ms-3"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
