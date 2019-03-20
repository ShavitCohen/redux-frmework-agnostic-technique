import * as AT from './../../actionTypes';

const INIT_STATE = {
  shows: [],
};

const { SEARCH } = AT;

const searchReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${SEARCH} ${AT.SET_TV_SHOWS}`:
      return {
        ...state,
        shows: payload,
      };
    default:
      return state;

  }
};

export default searchReducer;

