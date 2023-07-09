import { GET_DATA, GET_DETAIL } from "../actions/actionTypes";

const initialState = {
  data: [],
  detail:{},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    case GET_DETAIL:
      return { ...state, detail: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
