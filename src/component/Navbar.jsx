import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("retro");
    } else {
      setTheme("light");
    }
  };

  const { logOut, user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <>
      <div className="navbar   bg-opacity-50 bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold underline" : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allTourists"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold underline" : ""
                  }
                >
                  ALL TOURIST
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addTourist"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold underline" : ""
                  }
                >
                  AddTourist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myList"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold underline" : ""
                  }
                >
                  MY LIST
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-teal-700 font-black text-xl">
            Global <span className="text-rose-700">Gurus</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-500 text-lg font-bold  underline"
                    : "text-teal-700 font-bold text-lg"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allTourists"
                className={({ isActive }) =>
                  isActive
                    ? "text-rose-500 text-lg font-bold underline"
                    : "text-teal-700 font-bold text-lg"
                }
              >
                ALL TOURIST
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/addTourist"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-500 text-lg font-bold bg-blue-100 rounded p-1"
                      : "text-teal-700 font-bold text-lg"
                  }
                >
                  ADD TOURIST
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/myList"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-500 text-lg font-bold underline"
                      : "text-teal-700 font-bold text-lg"
                  }
                >
                  MY LIST
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt="img"
                title={user?.displayName}
                className="w-10 mx-2 h-10 rounded-full object-cover"
              />
              <button
                data-tooltip-id="logout-tooltip"
                data-tooltip-content="Log Out"
                className="btn btn-sm text-xl"
                onClick={handleLogOut}
              >
                logOut
              </button>
            </>
          ) : (
            <Link to="/login" className="btn text-xl text-green-700 btn-sm">
              Login
            </Link>
          )}
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle mx-3 theme-controller"
          />
        </div>
      </div>
      <ReactTooltip id="logout-tooltip" place="bottom" effect="solid" />{" "}
      {/* Tooltip Component */}
    </>
  );
};

export default Navbar;
