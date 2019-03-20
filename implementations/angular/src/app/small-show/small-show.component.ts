import {Component, Input, OnInit} from '@angular/core';
import {store, showInfoActions, searchActions} from 'redux-logic-layer';

const {openShowInfoModal} = showInfoActions;

const {tvShowSelected} = searchActions;

@Component({
  selector: 'app-small-show',
  templateUrl: './small-show.component.html',
  styleUrls: ['./small-show.component.css']
})
export class SmallShowComponent implements OnInit {

  @Input() show: any;
  constructor() { }

  ngOnInit() {

  }

  onSelectShow() {
    store.dispatch( tvShowSelected({id: this.show.id}))
  }
}
