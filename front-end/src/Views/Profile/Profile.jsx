import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getUserData} from "../../redux/actions/actions"
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state)
  
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (token && id) {
      try {
        dispatch(getUserData(id, token));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        if (window.location.pathname !== "/") navigate("/");
        else window.location.reload(true);
      }
    }
  },[])
  return <div>
    {user ?
      <div>
        <h1>Welcome {user.name}</h1>
        <div>
        {user.image&&<img src={user.image} alt={user.name} />} 
        </div>
        <h2>Favorites</h2>        
    </div>
    : <div>Loading...</div>  
  }
  </div>;
}

export default Profile