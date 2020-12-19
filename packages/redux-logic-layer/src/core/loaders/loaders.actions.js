import * as AT from '../../actionTypes';

const { LOADERS } = AT;
export const setLoader = ({ name, state }) => {
  return {
    type: AT.SET_LOADER,
    payload: { [name]: state },
    meta: {
      feature: LOADERS,
    },
  };
};