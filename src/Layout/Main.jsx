import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p className="text-center bg-gray-400 py-10">Navbar</p>
      <Outlet />
    </div>
  );
};

export default Main;
