import { DataProject } from "../interface";
import Project from "./Project";

interface Props {
  projects: DataProject[];
}

const ListOfProjects = ({ projects }: Props) => {
  return (
    <div className="container text-center">
      <div className="row row row-cols-1 row-cols-md-3 mb-3">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ListOfProjects;
