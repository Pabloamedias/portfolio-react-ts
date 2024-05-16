import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { Routes, Route } from "react-router-dom"


const App =() => {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route element={<Index/>} index></Route>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
