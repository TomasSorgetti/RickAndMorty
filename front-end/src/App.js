//react imports
import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";

//components imports
import Home from "./Views/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Detail from "./Views/Detail/Detail";
import Login from "./Views/Login/Login";
import Profile from "./Views/Profile/Profile";
import Locations from "./Views/Locations/Locations";
import Episodes from "./Views/Episodes/Episodes";
import CreateUser from "./Views/CreateUser/CreateUser";
import Blog from "./Views/Blog/Blog"
function App() {
  const token = localStorage.getItem("token");

  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/login"
          element={<Login/>}
        />
        {token && <Route path="/profile" element={<Profile />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
