import { get } from 'lodash';
import * as AT from './../../actionTypes';
import { setLoader } from '../loaders/loaders.actions';
import { getTvShows, searchTvShows, setTvShows } from './search.actions';
import { openShowInfoModal } from '../showInfo/showInfo.actions';
import { debounce } from 'lodash';

const { SEARCH } = AT;

const debouncedFunction = debounce(({ query, dispatch }) => dispatch(query ? searchTvShows({ query }) : setTvShows({ tvShows: [] })), 1000);
const match = ({ action, dispatch, getState }) => {
  const { payload, type } = action;
  switch (type) {
    case AT.USER_TYPING: {
      const query = payload;
      debouncedFunction({ query, dispatch });
    }
      break;

    case AT.SEARCH_TV_SHOWS: {
      const q = payload;
      dispatch([
        setLoader({ name: 'search', state: true }),
        getTvShows({ q }),
      ]);
    }
      break;

    case AT.GET_TV_SHOWS.SUCCESS: {
      const { data } = payload;
      const tvShows = data.map(({ show: { id, image, name }, score }) => ({
        id,
        score,
        image: image && image.medium,
        name,
      }));

      dispatch([
        setLoader({ name: 'search', state: false }),
        setTvShows({ tvShows }),
      ]);
    }
      break;

    case AT.GET_TV_SHOWS.ERROR: {
      // handle error here
    }
      break;

    case AT.TV_SHOW_SELECTED: {
      const id = payload;
      dispatch([
        openShowInfoModal({ id }),
      ]);
    }
      break;

    default:
    // do nothing
  }
};

const featureName = SEARCH;
export const searchMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);
  const feature = get(action, 'meta.feature');
  if (feature === featureName) { match({ action, dispatch, getState }); }
};