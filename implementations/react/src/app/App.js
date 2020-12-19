import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import { searchActions, showInfoActions } from "redux-logic-layer";
import { ShowsList } from "./components/ShowsList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import ShowDetailsDialog from "./components/ShowDetailsDialog";

const { tvShowSelected, userTyping } = searchActions;
const { setModalState } = showInfoActions;

const App = () => {
  const dispatcher = useDispatch();
  const shows = useSelector(({ search: { shows } }) => shows);
  const isModalOpen = useSelector(({ showInfo: { isOpen } }) => isOpen);
  const selectedShowInfo = useSelector(({ showInfo: { info } }) => info);

  const handleOnSelectShow = ({ id }) => {
    dispatcher(tvShowSelected({ id }));
  };

  const handleUserTyping = ({ query }) => {
    dispatcher(userTyping({ query }));
  };

  const handleDialogClose = () => {
    dispatcher(setModalState({ state: false }));
  };

  return (
    <div className="App">
      <PrimarySearchAppBar onUserTyping={handleUserTyping} />
      <div className={"app-body"}>
        <ShowsList shows={shows} onSelectShow={handleOnSelectShow} />
        <ShowDetailsDialog
          isOpen={isModalOpen}
          showInfo={selectedShowInfo}
          onDialogClose={handleDialogClose}
        />
      </div>
    </div>
  );
};

export default App;
