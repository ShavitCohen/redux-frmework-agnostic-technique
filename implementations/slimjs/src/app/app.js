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


// application root custom element
@tag('awesome-app')
@template(/*html*/`
<style>
  :host {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: #444;
  }

  :host([has-selection]) {
    background-color: #444;
    color: #ddd;
  }

  :host, :host :not(show-info) {
    transition: 450ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :host #results {
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }

  :host show-info {
    position: absolute;
    left: 20rem;
    top: 5rem;
  }

  :host show-card {
    margin-right: 1rem;
    margin-bottom: 1rem;
    transform: translate3d(0px, 0px, 0px);
    cursor: pointer;
  }

  :host([has-selection]) show-card:not([selected]) {
    opacity: 0;
    pointer-events: none;
  }

  :host([has-selection]) app-header {
    transform: translate3d(0, -15rem, 0);
  }

  :host([has-selection]) show-card[selected] {
    transform: translate3d({{leftTransform}}px, {{topTransform}}px, 0px);
    pointer-events: none;
  }
</style>
<app-header></app-header>
<div id="results">
  <show-card s:repeat="shows as show" click="selectShow">{{show.name}}</show-card>
</div>
<show-info bind:show="showInfo" on-close="closeInfo"></show-info>
`)
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
    this.leftTransform = 15 - card.offsetLeft;
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