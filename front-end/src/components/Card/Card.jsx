import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Card.module.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ char }) => {
  const { name, image, gender, species, status, id } = char;
  const [isFav, setisFav] = useState(false);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getFav = async () => {
      await axios
        .get(`http://localhost:3001/character/getChar/${userId}`)
        .then((response) => {
          if (response) {
            response.data.map((fav) => {
              if (fav.id === id) {
                setisFav(true);
              }
            });
          }
        })
        .catch((err) => {
          console.log("get favorites error", err);
        });
    };
    getFav();
  }, []);

  const addFavorite = async () => {
    if ((id, name, species, gender, status, image, userId)) {
      await axios.post("http://localhost:3001/character/createChar", {
        id,
        name,
        species,
        gender,
        status,
        image,
        userId,
      }).then((res) => {
        if(res)console.log("favorite added");
      }).catch((err) => {
        if(err)console.log("favorite error add");
      })
    }
  };
  const deleteFavorite = async () => {
      await axios.delete(
        `http://localhost:3001/character/deleteChar/${id}/${userId}`
    )
    if (window.location.pathname === "/profile") {
      window.location.reload(true)
    }
  };

  const handleFavorite = () => {
    if (isFav) {
      setisFav(false);
      deleteFavorite(id);
    } else {
      setisFav(true);
      addFavorite();
    }
  };
  return (
    <div>
      { isFav ? (
        <button className={styles.fav} onClick={handleFavorite}>
          <AiFillHeart className={styles.favIcon} />
        </button>
      ) : (
        (
          <button className={styles.fav} onClick={handleFavorite}>
            <AiOutlineHeart className={styles.favIconWhite} />
          </button>
        )
      )}
      <span>{status}</span>
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        <div>
          <img src={image} alt={`this is the ${name} card`} />
        </div>
        <p>{gender}</p>
        <p>{species}</p>
      </Link>
    </div>
  );
};

export default Card;
