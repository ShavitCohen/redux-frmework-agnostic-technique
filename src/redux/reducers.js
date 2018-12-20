import { combineReducers } from 'redux';
import search from './feature/search/search.reducer';
import showInfo from './feature/showInfo/showInfo.reducer';
import loaders from './feature/loaders/loaders.reducer';

const reducers = combineReducers({
  search,
  showInfo,
  loaders,
});

export default reducers;