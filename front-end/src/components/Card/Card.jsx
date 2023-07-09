import React from "react";
import { Link } from "react-router-dom";


const Card = ({ char }) => {
  const { name, image, gender, species, status, id } = char;
  return (
    <Link to={`/detail/${id}`}>
      <span>{status}</span>
      <h3>{name}</h3>
      <div>
        <img src={image} alt={`this is the ${name} card`} />
      </div>
      <p>{gender}</p>
      <p>{species}</p>
    </Link>
  );
};

export default Card;
