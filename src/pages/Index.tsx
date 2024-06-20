import ListOfProjects from "../components/ListOfProjects";
import  "../assets/styles.css"
import { useProjects } from "../context/ProjectsContext";

const Index = () => {

  const { projects, loading} = useProjects()


  return (
    <>
      <h1 className="text-center fw-bold m-4 font-purple ">{loading ? "Cargando proyectos..." : "Mis proyectos" }</h1>
      <ListOfProjects projects={projects!} />
    </>
  );
};

export default Index;
