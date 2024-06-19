import ListOfProjects from "../components/ListOfProjects";
import  "../assets/styles.css"
import { useProjects } from "../context/ProjectsContext";

const Index = () => {
  //const fireBaseProjects = await readData("/") as DataProject[]

  const { projects, loading, error} = useProjects()

 

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <h1 className="text-center fw-bold m-4 font-purple ">Mis Proyectos</h1>
      <ListOfProjects projects={projects!} />
    </>
  );
};

export default Index;
