import { get } from 'lodash';
/**
 * This function is a redux middleware wrapper which enables replacing the switch - case 
 * structure
 * @param {feature, featureMap, globalMap} param0
 */
export const createMapMiddleware = ({ feature, featureMap, globalMap }) => (store) => (next) => (action) => {
  const { type } = action;
  const { dispatch, getState } = store;
  next(action);
  const func = get(action, 'meta.feature') === feature ? featureMap[type] : globalMap[type];
  func && func({ action, dispatch, getState });
};

export default createMapMiddleware;
