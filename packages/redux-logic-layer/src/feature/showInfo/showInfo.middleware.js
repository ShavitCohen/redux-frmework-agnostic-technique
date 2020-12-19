import * as AT from "../../actionTypes";
import { setLoader } from "../../core/loaders/loaders.actions";
import { getShowInfo, setModalState, setShowInfo } from "./showInfo.actions";
import createMapMiddleware from "../../mapMiddleware";

const { SHOW_INFO } = AT;
const feature = SHOW_INFO;

const globalMap = {};
const featureMap = {
  [AT.OPEN_SHOW_INFO_MODAL]: ({ action: { payload }, dispatch, getState }) => {
    const id = payload;
    dispatch([
      setModalState({ state: true }),
      setLoader({ name: "showInfo", state: true }),
      getShowInfo({ id }),
    ]);
  },
  [AT.GET_SHOW_INFO.SUCCESS]: ({ action: { payload }, dispatch, getState }) => {
    const show = payload.data;
    dispatch([
      setLoader({ name: "showInfo", state: false }),
      setShowInfo({ show }),
    ]);
  },
  [AT.GET_SHOW_INFO.ERROR]: ({ action, dispatch, getState }) => {
    //handle error here
  },
};

export default createMapMiddleware({ feature, globalMap, featureMap });
