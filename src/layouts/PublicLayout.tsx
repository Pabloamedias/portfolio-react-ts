import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/styles.css";
const PublicLayout = () => {
  return (
    <div className=" layout-bg-indigo d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-fill ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
