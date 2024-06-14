import ListOfProjects from "../components/ListOfProjects";
import actualProjects from "../utils/actualProjects.json";
import  "../assets/styles.css"

const Index = () => {
  return (
    <>
      <h1 className="text-center fw-bold m-4 font-purple ">Mis Proyectos</h1>
      <ListOfProjects projects={actualProjects} />
    </>
  );
};

export default Index;
