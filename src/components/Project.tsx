import { DataProject } from "../interface";

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
            <a
              href={project.urlGithub}
              target="_blank"
              className="btn btn-primary  "
            >
              Ir al proyecto
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
