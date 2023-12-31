//imports react
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

const Navigation = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");


    useEffect(() => {
      if (token) {
        try {
          axios
            .get(`http://localhost:3001/users/detail`, {
              headers: {
                authorization: token,
              },
            })
            .then((response) => {
              if (response) setUser(response.data);
            });
        } catch (error) {
          console.log("profile", error);
        }
      }
      return
    }, []);
  
    const handleLogout = (e) => {
      Swal.fire({
        title: "Are you sure to logout?",
        icon: "question",
        confirmButtonText: "Ok",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          navigate("/login");

        }
      });
  };

  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    {
      id: 1,
      label: "Characters",
      route: "/",
    },
    {
      id: 2,
      label: "Locations",
      route: "/locations",
    },
    {
      id: 3,
      label: "Episodes",
      route: "/episodes",
    },
    {
      id: 4,
      label: "Blog",
      route: "/blog",
    },
  ];
  const handleClick = () => {
    setNav(!nav);
  };
  const handleCancel = (label) => {
    setNav(false);
    setActive(label);
  };



  return (
    <nav className="flex items-center justify-between flex-wrap p-8 lg:flex-row">
      <Link to="/">Rick and Morty</Link>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex flex-col gap-2 items-center lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-end lg:pr-36 lg:w-auto${
          !nav ? " hidden" : ""
        }`}
      >
        <ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4 items-center">
          {links?.map(({ id, label, route }) => (
            <li key={id}>
              <Link
                className={`${active === label ? "font-semibold" : ""}`}
                onClick={() => handleCancel(label)}
                to={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4 lg:pl-96">
          {token && user.role ? (
            <div className="lg:flex lg:gap-4">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button type="button" onClick={(e) => handleLogout(e)}>
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
