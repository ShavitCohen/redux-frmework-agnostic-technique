import { Slim } from 'slim-js'
import { tag, template, useShadow } from 'slim-js/Decorators'

// redux adapter
import { connect } from './store/connect'
import { store, searchActions, showInfoActions } from 'x-redux';

// Stylesheets
import '../index.css';

// Slim.js plugin to invoke shady-css on components
import '../helpers/shady-css.js'

// Slimjs directives (i.e. repeat, if, etc.)
import 'slim-js/directives/all.js'

// import custom elements
import './components/header.js'
import './components/show-card.js'
import './components/show-info.js'

import AppTemplate from './app.template.html';


// application root custom element
@tag('awesome-app')
@template(AppTemplate)
@useShadow(true)
class App extends Slim {

  constructor () {
    super();
    this.shows = [];
    this.leftX = 0;
    this.topX = 0;
    this.showInfo = undefined;
  }

  cleanupCards () {
    this.findAll('show-card').forEach(card => card.removeAttribute('selected'));
  }

  selectShow ({target: card}) {
    store.dispatch(searchActions.tvShowSelected(card.show));
    this.leftTransform = 25 - card.offsetLeft;
    this.topTransform = 15 - card.offsetTop;
    card.setAttribute('selected', '');
  }

  @connect('showInfo')
  infoResults(data) {
    if (data.info) {
      this.setAttribute('has-selection', '');
      requestAnimationFrame(() => {
        this.showInfo = data.isOpen ? data.info : undefined;
      })
    }
    if (!data.isOpen) {
      this.showInfo = undefined;
      window.scrollTo({top: 0});
      this.removeAttribute('has-selection');
      this.cleanupCards();
    }
  }

  @connect('search')
  searchResults (searchData) {
    if (!this.showInfo) {
      this.shows = searchData.shows || [];
    }
  }
}