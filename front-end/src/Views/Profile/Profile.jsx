import React, { useEffect,useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import Cards from "../../components/Cards/Cards";

const Profile = () => {
  const [fav, setFav] = useState([])
  const [user, setUser] = useState({})

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

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
            if(response)setUser(response.data.response)
          });
      } catch (error) {
        console.log("profile", error);
      }
    }
  }, []);

  useEffect(() => {
    const getFav = async () => {
      if (userId && token) {
        await axios
        .get(`http://localhost:3001/character/getChar/${userId}`)
        .then((res) => {
          setFav(res.data);
        })
        .catch((err) => {
          console.log("get favorites error", err);
        });
      }
      return
    };
    
      getFav();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <div>{user.image && <img src={user.image} alt={user.name} />}</div>
          <h2>Favorites</h2>
          {fav.length ? (
            <Cards characters={fav} />
          ) : (
            <div>You dont have any favorite added</div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Profile;
