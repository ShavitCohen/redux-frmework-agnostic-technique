import { Component, OnInit } from '@angular/core';
import {store, showInfoActions} from 'x-redux';
import {MatDialog} from '@angular/material';
import {ShowInfoDialogComponent} from '../show-info-dialog/show-info-dialog.component';

const {setModalState} = showInfoActions;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  tvShows: any;

  prevState: any;

  constructor(public dialog: MatDialog) {
    console.log('store', store);
  }

  showsSelector(state: any) {
    return state.search.shows;
  }

  showInfoSelector(state: any) {
    return state.showInfo;
  }

  getShows() {
    const state = store.getState();
    const shows = this.showsSelector(state);
    this.tvShows = shows;


    const {isOpen} = this.showInfoSelector(state);

    if (isOpen && !this.showInfoSelector(this.prevState).isOpen ) {
      this.openModal()
    }

    this.prevState = state;
  }

  ngOnInit() {
    store.subscribe(() => this.getShows())

  }

  private openModal() {
   const dialogRef =  this.dialog.open(ShowInfoDialogComponent, {minWidth: '100%', minHeight: '100%'})

    dialogRef.afterClosed().subscribe(() => {
      store.dispatch(setModalState({state: false}))
    })
  }
}
