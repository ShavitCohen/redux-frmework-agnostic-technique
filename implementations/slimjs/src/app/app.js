import { Slim } from 'slim-js'
import { tag, template, useShadow } from 'slim-js/Decorators'

// redux adapter
import { connect } from './store/connect'
import { store, searchActions } from 'x-redux';

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
import './components/cast-memeber.js'

import AppTemplate from './app.template.html';


// application root custom element
@tag('awesome-app')
@template(AppTemplate)
@useShadow(true)
class App extends Slim {

  cleanupCards () {
    this.findAll('show-card').forEach(card => card.removeAttribute('selected'));
  }

  clear () {
    this.shows = [];
  }

  selectShow ({target: card}) {
    this.cleanupCards();
    card.setAttribute('selected', '');
    store.dispatch(searchActions.tvShowSelected(card.show));
    this.leftTransform = 25 - card.offsetLeft;
    this.topTransform = 15 - card.offsetTop;
  }

  @connect('showInfo')
  infoResults(data) {
    if (data.info) {
      this.show = data.info;
    }
    if (data.isOpen) {
      this.setAttribute('has-selection', '');
    }
    if (!data.isOpen) {
      window.scrollTo({top: 0});
      this.removeAttribute('has-selection');
    }
  }

  @connect('search')
  searchResults (searchData) {
    this.shows = searchData.shows || [];
  }
}