import { GET_DATA,GET_DATA_BY_NAME, GET_DETAIL, GET_EPISODES, GET_USER } from "./actionTypes";
import axios from "axios";

export const getData = (URL_API) => {
  return async (dispatch) => {
    await axios.get(URL_API).then((response) => {
      dispatch({
        type: GET_DATA,
        payload: response.data,
      });
    });
  };
};
export const getDataByName = (name) => {
  return {
    type: GET_DATA_BY_NAME,
    payload:name,
  };
};

export const getDetail = (URL_DETAIL) => {
  return (dispatch) => {
    axios.get(URL_DETAIL).then((response) => {
      dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    });
  };
};

export const getEpisode = (URL_EPISODE) => {
  return (dispatch) => {
    axios.get(URL_EPISODE).then((response) => {
      dispatch({
        type: GET_EPISODES,
        payload: response.data,
      });
    });
  };
};

export const getUserData = (id,token) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/users/detail/${id}`, {
      headers: {
        Authorization:`Bearer ${token}`,
      }
    })
      .then((response) => {
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    });
  };
};
