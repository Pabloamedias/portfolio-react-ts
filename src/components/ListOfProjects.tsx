import { DataProject } from "../interface";
import Project from "./Project";

interface Props {
  projects: DataProject[];
}

const ListOfProjects = ({ projects }: Props) => {
  return (
    <div className="container">
        <div className="row">

      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
        </div>
    </div>
  );
};

export default ListOfProjects;
