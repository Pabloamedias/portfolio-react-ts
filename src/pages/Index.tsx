import ListOfProjects from "../components/ListOfProjects";
import actualProjects from "../utils/actualProjects";
const Index = () =>{
    return (
        <>
                <h2 className="text-center m-4">Mis Proyectos</h2>
        <ListOfProjects projects={actualProjects}  />
        </>

    )
}

export default Index;