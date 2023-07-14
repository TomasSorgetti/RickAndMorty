import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetail } from "../../redux/actions/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state);
    const URL_DETAIL = `https://rickandmortyapi.com/api/character/${id}`
    

  useEffect(() => {
    if (id) {     
      dispatch(getDetail(URL_DETAIL));
    }
  }, []);
    
  return (
    <div>
      {detail.id ? (
        <>
          <h1>{detail.name}</h1>
          <div>
            <img
              src={detail.image}
              alt={`detail from ${detail.name} character`}
            />
          </div>
          <p>Specie:{detail.species}</p>
          <p>Gender:{detail.gender}</p>
          <p>Status:{detail.status}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
