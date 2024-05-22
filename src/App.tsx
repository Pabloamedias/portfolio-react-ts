import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Index />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
