import { useProjects } from "../context/ProjectsContext";
import { DataProject } from "../interface";
import CardProject from "./CardProject";
import LoadingCardProject from "./LoadingCardProject";

interface Props {
  projects: DataProject[];
}

const ListOfProjects = ({ projects }: Props) => {
  const dummyArray = new Array(3).fill(0);
  const { loading } = useProjects();

  return (
    <div className="container text-center">
      <div className="row row row-cols-1 row-cols-md-3 mb-3">
        {loading
          ? dummyArray.map((_item, index) => <LoadingCardProject key={index} />)
          : projects.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
      </div>
    </div>
  );
};

export default ListOfProjects;
