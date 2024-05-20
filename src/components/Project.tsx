import { DataProject } from "../interface";
import "../assets/styles.css";

interface Props {
  project: DataProject;
}

const Project = ({ project }: Props) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card h-100">
          <img src={project.urlImage} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <div className="d-grid gap-2">
              
              <a
                href={project.urlDeployed}
                target="_blank"
                className="btn btn-purple"
              >
                <i className="fa-solid fa-magnifying-glass m-1 me-1"/>
                Ver proyecto
              </a>
              
              <a
                href={project.urlGitHub}
                target="_blank"
                className="btn btn-purple"
              >
                <i className="fa-brands fa-github m-1 me-1"/>
                Ir al repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
