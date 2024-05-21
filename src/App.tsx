import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (

        <Routes>
          <Route element={<PublicLayout />} path="/">
            <Route element={<Index />} index></Route>
            <Route element={<Profile />} path="/perfil"></Route>
            <Route element={<NotFound />} path="*"></Route>
          </Route>
        </Routes>
  );
};

export default App;
