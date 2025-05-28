import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiUserAdd,
  HiLogin,
  HiLogout,
  HiOutlinePencilAlt,
  HiOutlineDocumentText,
  HiOutlineCollection,
  HiUserCircle,
} from "react-icons/hi";

import AuthContext from "../store/auth-context";

export default function Header() {
  const { isLoggedIn, logout, userName } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/Blog_pic.webp"
            alt="Logo"
            style={{ width: "45px", height: "45px", marginRight: "10px" }}
          />
          <span className="fw-bold fs-4">My Blogs</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center gap-3">
            <NavLink
              className="nav-link d-flex align-items-center"
              to="/"
              end
              style={({ isActive }) =>
                isActive ? { fontWeight: "700", color: "white" } : { color: "rgba(255,255,255,0.85)" }
              }
            >
              <HiOutlineHome size={20} className="me-1" />
              Home
            </NavLink>

            {!isLoggedIn && (
              <>
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/signup"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "700", color: "white" } : { color: "rgba(255,255,255,0.85)" }
                  }
                >
                  <HiUserAdd size={20} className="me-1" />
                  Register
                </NavLink>

                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/login"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "700", color: "white" } : { color: "rgba(255,255,255,0.85)" }
                  }
                >
                  <HiLogin size={20} className="me-1" />
                  Login
                </NavLink>
              </>
            )}

            {isLoggedIn && (
              <>
                <span className="nav-link disabled d-flex align-items-center text-white fw-semibold">
                  <HiUserCircle size={22} className="me-1" />
                  {userName}
                </span>

                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/create-blog"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "700", color: "white" } : { color: "rgba(255,255,255,0.85)" }
                  }
                >
                  <HiOutlinePencilAlt size={20} className="me-1" />
                  New Post
                </NavLink>

            
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to="/my-blogs"
                  style={({ isActive }) =>
                    isActive ? { fontWeight: "700", color: "white" } : { color: "rgba(255,255,255,0.85)" }
                  }
                >
                  <HiOutlineCollection size={20} className="me-1" />
                  My Blogs
                </NavLink>

                <button
                  className="btn btn-outline-light btn-sm ms-2"
                  onClick={logout}
                  type="button"
                >
                  <HiLogout size={20} className="me-1" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

