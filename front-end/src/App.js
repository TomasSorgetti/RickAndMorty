//react imports
import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";

//components imports
import Home from "./Views/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Detail from "./Views/Detail/Detail";
import Login from "./Views/Login/Login";
import Create from "./Views/Create/Create";
import Profile from "./Views/Profile/Profile";
import Locations from "./Views/Locations/Locations";
import Episodes from "./Views/Episodes/Episodes";
import CreateUser from "./Views/CreateUser/CreateUser";
import { useSelector } from "react-redux";
function App() {
  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state);

  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route
          path="/login"
          element={<Login/>}
        />
        {token && user.role === "admin" && (
          <Route path="/create" element={<Create />} />
        )}
        {token && <Route path="/profile" element={<Profile />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
