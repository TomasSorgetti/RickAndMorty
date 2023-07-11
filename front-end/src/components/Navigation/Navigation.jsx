//imports react
import React,{useState} from 'react'
import { Link } from 'react-router-dom';



const Navigation = () => {
  const [nav, setNav] = useState(false)
  const [active, setActive] = useState("")

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
  ];
  const linksUser = [
    {
      id: 4,
      label: "Create",
      route: "/create",
    },
    {
      id: 5,
      label: "Login",
      route: "/login",
    },
    {
      id: 6,
      label: "Profile",
      route: "/profile",
    },
  ];
  const handleClick = () => {
    setNav(!nav)
  }
  const handleCancel = (label) => {
    setNav(false)
    setActive(label)

  }
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
        <ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4">
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
          {linksUser?.map(({ id, label, route }) => (
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
      </div>
    </nav>
  );
}

export default Navigation