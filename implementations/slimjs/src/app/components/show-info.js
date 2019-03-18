import { tag, template, useShadow } from "slim-js/Decorators";

import { store, showInfoActions } from 'x-redux';
import { connect } from "../store/connect";

@tag('show-info')
@template(/*html*/`
<style>
  :host {
    transition: 1750ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translate3d(150px, 0, 0);
    left: 20rem;
    padding-right: 2rem;
    color: #444;
    transition: 850ms cubic-bezier(0.645, 0.045, 0.355, 1);
    position: absolute;
    left: 20rem;
    top: 5rem;
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
</style>
<div s:if="show">
  <a href="#" click="close">⬅️ Go Back</a>
  <h1>{{show.name}}</h1>
  <p>Language: {{show.language}}</p>
  <p bind:inner-H-T-M-L="getSummary(show)"></p>
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