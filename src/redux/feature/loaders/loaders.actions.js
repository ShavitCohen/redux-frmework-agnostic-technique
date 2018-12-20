import * as AT from '../../actionTypes';

const { LOADERS } = AT;
export const setLoader = ({ name, state }) => {
  return {
    type: `${LOADERS} ${AT.SET_LOADER}`,
    payload: { [name]: state },
  };
};