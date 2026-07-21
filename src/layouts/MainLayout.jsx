import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Outlet />

      <h2>Footer</h2>
    </div>
  );
};

export default MainLayout;
