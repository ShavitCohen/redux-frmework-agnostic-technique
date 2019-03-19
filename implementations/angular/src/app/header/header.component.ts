import {Component, OnInit} from '@angular/core';
import {searchActions, showInfoActions, store} from 'x-redux';

const {userTyping} = searchActions;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  userTyping = (e) => {
    store.dispatch(userTyping({query: e}))
  }
}

