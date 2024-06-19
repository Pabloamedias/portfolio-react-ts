import ListOfProjects from "../components/ListOfProjects";
import  "../assets/styles.css"
import { readData } from "../config/firebase";
import { DataProject } from "../interface";
import { useEffect, useState } from "react";

const Index = () => {
  //const fireBaseProjects = await readData("/") as DataProject[]

  const [firebaseProjects, setFirebaseProjects] = useState<DataProject[] | null> (null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    console.log("fetchData")
    const fetchData = async () => {

      try {
        const data = await readData("/") as DataProject[];
        setFirebaseProjects(data);
      } catch (error) {
        console.log("Error fetching data:", error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  },[])

  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <h1 className="text-center fw-bold m-4 font-purple ">Mis Proyectos</h1>
      <ListOfProjects projects={firebaseProjects!} />
    </>
  );
};

export default Index;
