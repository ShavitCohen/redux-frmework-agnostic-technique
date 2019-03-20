import configureStore from './src/store';
import * as searchActions from './src/feature/search/search.actions';
import * as showInfoActions from './src/feature/showInfo/showInfo.actions';

export const store = configureStore();

export {
  searchActions,
  showInfoActions,
};
