import { get } from 'lodash';
import * as AT from './../../actionTypes';

const INIT_STATE = {
  isOpen: false,
  info: null,
};

const { SHOW_INFO } = AT;
const featureName = SHOW_INFO;

const showInfoReducer = (state = INIT_STATE, action) => {

  const { type, payload } = action;
  const feature = get(action, 'meta.feature');

  if (feature !== featureName) {
    return state;
  }
  switch (type) {
    case AT.SET_MODAL_STATE:
      return { ...state, isOpen: payload };

    case AT.SET_SHOW_INFO:
      return { ...state, info: payload };

    default:
      return state;
  }
};

export default showInfoReducer;

