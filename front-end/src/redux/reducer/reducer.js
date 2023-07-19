import {
  GET_DATA,
  GET_DATA_BY_NAME,
  GET_DETAIL,
  GET_EPISODES,
  GET_USER,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  dataCopy: [],
  detail: {},
  episode: {},
  user: {},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload, dataCopy: action.payload };
    case GET_DATA_BY_NAME:
      const search = action.payload;
      const filteredResults = state.dataCopy.results.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase())
      );
      if (action.payload === "") {
        return {
          ...state,
          data: state.dataCopy,
        };
      }
      return {
        ...state,
        data: {
          info: {
            ...state.data.info,
            count: filteredResults.length,
            pages: Math.ceil(filteredResults.length / 20),
          },
          results: filteredResults,
        },
      };
    case GET_DETAIL:
      return { ...state, detail: action.payload };
    case GET_EPISODES:
      return { ...state, episode: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
