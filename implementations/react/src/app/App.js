import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { searchActions, showInfoActions } from 'x-redux';
import { ShowsList } from './components/ShowsList';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import ShowDetailsDialog from './components/ShowDetailsDialog';

const { tvShowSelected, userTyping } = searchActions;
const { setModalState } = showInfoActions;

class App extends Component {

  render() {
    const { shows, tvShowSelected, userTyping, isModalOpen, selectedShowInfo, setModalState } = this.props;
    return (
      <div className="App">
        <PrimarySearchAppBar onUserTyping={userTyping} />
        <div className={'app-body'}>
          <ShowsList shows={shows} onSelectShow={tvShowSelected} />
          <ShowDetailsDialog
            isOpen={isModalOpen} showInfo={selectedShowInfo}
            handleDialogClose={() => setModalState({ state: false })}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search, showInfo }) => {
  const { shows } = search;
  const { isOpen: isModalOpen, info: selectedShowInfo } = showInfo;
  return { shows, isModalOpen, selectedShowInfo };
};

export default connect(mapStateToProps, {
  tvShowSelected,
  userTyping,
  setModalState,
})(App);
