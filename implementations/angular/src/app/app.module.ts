import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {NgReduxModule} from '@angular-redux/store';
import {store} from 'redux-logic-layer';
import {SearchResultsComponent} from './search-results/search-results.component';
import { SmallShowComponent } from './small-show/small-show.component';
import { ScorePipe } from './score.pipe';
import { ShowInfoDialogComponent } from './show-info-dialog/show-info-dialog.component';
import {MatDialogModule} from '@angular/material';
import { SanitzeHtmlPipe } from './sanitze-html.pipe';


const materialModules = [MatDialogModule];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SmallShowComponent,
    ScorePipe,
    ShowInfoDialogComponent,
    SanitzeHtmlPipe
  ],
  entryComponents: [ShowInfoDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgReduxModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  store: any;

  constructor() {
    this.store = store;
  }
}
