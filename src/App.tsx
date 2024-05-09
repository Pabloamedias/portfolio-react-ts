import Navbar from "./components/Navbar"
import Index from "./pages/Index"
import { Routes, Route, BrowserRouter } from "react-router-dom"


const App =() => {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Index/>} index></Route>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
