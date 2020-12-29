import { get } from 'lodash';
import * as AT from '../../actionTypes';

const { LOADERS } = AT;

const INIT_STATE = {
  search: false,
  showInfo: false,
};

const featureName = LOADERS;
const loadersReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  const feature = get(action, 'meta.feature');

  if (feature !== featureName) {
    return state;
  }

  switch (type) {
    case AT.SET_LOADER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;

  }
};

export default loadersReducer;

