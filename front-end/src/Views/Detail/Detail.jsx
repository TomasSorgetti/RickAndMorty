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
    dispatch(getDetail(URL_DETAIL));
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
          <p>{detail.species}</p>
          <p>{detail.gender}</p>
          <p>{detail.status}</p>
          <p>{detail.origin.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
