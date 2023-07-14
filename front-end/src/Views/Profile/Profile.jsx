import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUserData} from "../../redux/actions/actions"
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state)
  const token = localStorage.getItem("token")
  const userData = user.response

  useEffect(() => {
    if (token) {
      try {
        dispatch(getUserData(token));
      } catch (error) {
        console.log("profile",error);
        // localStorage.removeItem("token");
        // if (window.location.pathname !== "/") navigate("/");
        // else window.location.reload(true);
      }
    }
  },[])
  return (
    <div>
      {userData ? (
        <div>
          <h1>Welcome {userData.name}</h1>
          <p>{userData.id}</p>
          <div>
            {userData.image && <img src={userData.image} alt={userData.name} />}
          </div>
          <h2>Favorites</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile