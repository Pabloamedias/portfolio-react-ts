import { DataProject } from "../interface";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import addBaseUrlPath from "../helpers/addBaseUrlPath";

interface Props {
  project: DataProject;
}

const CardProject = ({ project }: Props) => {
  return (
    <>
      <div className="col mb-4">
        <div className="card h-100">
          <img
            src={addBaseUrlPath(project.urlImage)}
            className="card-img-top w-100 h-100 "
          />
          <div className="card-body">
            <h5 className="card-title font-purple">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <div className="d-grid gap-2">
              <Link
                to={`/proyectos/${project.slug}`}
                className={`btn btn-purple`}
              >
                <i className="fa-solid fa-magnifying-glass m-1 me-1" />
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
