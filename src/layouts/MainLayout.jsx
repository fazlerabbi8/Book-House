import {Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="space-y-4">
      <Navbar></Navbar>

      <Outlet />

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
