import { get } from 'lodash';
import * as AT from './../../actionTypes';

const INIT_STATE = {
  shows: [],
};

const { SEARCH } = AT;
const featureName = SEARCH;

const searchReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  const feature = get(action, 'meta.feature');

  if (feature !== featureName) {
    return state;
  }

  switch (type) {
    case AT.SET_TV_SHOWS:
      return {
        ...state,
        shows: payload,
      };
    default:
      return state;

  }
};

export default searchReducer;

