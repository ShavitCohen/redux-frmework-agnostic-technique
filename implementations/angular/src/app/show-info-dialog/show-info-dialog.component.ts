import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {store} from 'x-redux';

@Component({
  selector: 'app-show-info-dialog',
  templateUrl: './show-info-dialog.component.html',
  styleUrls: ['./show-info-dialog.component.scss']
})
export class ShowInfoDialogComponent implements OnInit, OnDestroy {

  show: any;

  componentSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<ShowInfoDialogComponent>, private element: ElementRef) {
  }

  ngOnInit() {
    this.componentSubscription = store.subscribe(() => this.getShowInfo())

    const element: HTMLElement =  document.querySelector('mat-dialog-container');
    element.style.height = `${window.screen.availHeight}px`;
  }

  ngOnDestroy(): void {
    // if (this.componentSubscription) {
    //   this.componentSubscription.unsubscribe();
    // }
  }

  private getShowInfo() {
    this.show = store.getState().showInfo.info;
  }

  close() {
    this.dialogRef.close();
  }
}
