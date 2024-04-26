import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { logOut, user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt="img"
                title={user?.displayName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <button className="btn btn-sm" onClick={handleLogOut}>
                logOut
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
