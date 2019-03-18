import { tag, template, useShadow } from "slim-js/Decorators";

import { store, showInfoActions } from 'x-redux';
import { connect } from "../store/connect";

@tag('show-info')
@template(/*html*/`
<style>
  :host {
    transform: translate3d(150px, 0, 0);
    padding-right: 2rem;
    color: #444;
    transition: 850ms cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0;
  }
  :host-context([has-selection]) {
    transform: translate3d(0px, 0, 0);
    color: #efefef;
    opacity: 1;
  }
  a:visited, a:hover, a {
    color: inherit;
    text-decoration: none;
  }
  .genre {
    border-radius: 0.2rem;
    font-size: 0.8rem;
    background-color: #efefef;
    color: #444;
    padding: 0.2rem;
    margin-right: 0.5rem;
  }
</style>
<div s:if="show">
  <a href="#" click="close">⬅️ Go Back</a>
  <h1>{{show.name}}</h1>
  <div s:if="show.genres.length">
    Genres: <span class="genre" s:repeat="show.genres as genre">{{genre}}</span>
  </div>
  <p>Language: {{show.language}}</p>
  <p bind:inner-H-T-M-L="getSummary(show)"></p>
  <a s:if="show.officialSite" bind:href="show.officialSite" target="_blank">Visit Website</a>
</div>
`)
@useShadow(true)
class ShowInfo extends Slim {

  constructor () {
    super();
    this.show = {};
  }

  @connect('showInfo')
  onShowChanged (data) {
    this.show = data.isOpen && data.info;
  }

  close () {
    store.dispatch(showInfoActions.setModalState({state: false}));
  }

  getSummary(info = {}) {
    return info && info.summary ? info.summary : 'No Summary';
  }

  connectedCallback () {
    super.connectedCallback();
  }

  disconnectedCallback () {
    super.disconnectedCallback();
  }
}