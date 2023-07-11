import { GET_DATA, GET_DETAIL, GET_EPISODES } from "../actions/actionTypes";

const initialState = {
  data: [],
  detail: {},
  episode:{},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    case GET_DETAIL:
      return { ...state, detail: action.payload };
    case GET_EPISODES:
      return{...state, episode:action.payload}
    default:
      return { ...state };
  }
};
export default rootReducer;
