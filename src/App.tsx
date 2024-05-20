import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-fill">
        <Routes>
          <Route element={<Index />} index></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
