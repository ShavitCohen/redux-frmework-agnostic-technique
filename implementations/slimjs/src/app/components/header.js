import { tag, template, useShadow } from "slim-js/Decorators";
import { Slim } from "slim-js";

import { searchActions, store } from 'redux-logic-layer';
import { debounce } from "../../helpers/debounce";

@tag('app-header')
@template(/*html*/`
<style>
  :host {
    line-height: 1.2;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--accent-color);
    color: var(--header-text-color);
    letter-spacing: 0.08rem;
    padding: 0 1rem 0 1rem;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
  }

  :host * {
    transition: 450ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

   #logo {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-image: url(../assets/slim-logo.png);
    border-radius: 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 40px 40px;
  }

  h1 {
    display: inline;
    font-size: 1.5rem;
    font-weight: 300;
    flex-grow: 1;
  }

  input {
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    background-color: rgba(255,255,255,0.1);
    border: none;
    outline: none;
    border-radius: 5px;
    height: 2rem;
    justify-self: flex-end;
    color: var(--header-text-color);
    padding: 0.3rem;
    width: 15rem;
    margin-right: 2rem;
    padding-left: 2rem;
  }

  input:focus {
    padding-left: 3.5rem;
  }

  input:hover:not(:focus) {
    padding-left: 2.5rem;
  }

  input:hover:not(:focus)::placeholder {
    opacity: 0.2;
  }

  input:focus::placeholder {
    position: relative;
    opacity: 0;
  }

  input::placeholder {
    transition: 450ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--header-text-color);
    opacity: 0.7;
  }

  #icon {
    width: 24px;
    position: absolute;
    left: 0.5rem;
    top: calc(50% - 12px);
  }

  input:focus ~ #icon {
    left: 1.2rem;
  }

  #searchbox {
    position: relative;
  }
</style>

<h1>Redux❤️slim.js - Middleware example</h1>
<span id="searchbox">
  <input type="text" placeholder="Search…" input="onSearch">
  <svg id="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path stroke="none" fill="var(--header-text-color)" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
</span>
<span id="logo"></span>
`)
@useShadow(true)
class AppHeader extends Slim {

  constructor () {
    super();
    this.doSearch = debounce((text) => {
      store.dispatch(searchActions.getTvShows({q:text}));
    });
  }

  onSearch (event) {
    this.doSearch(event.target.value);
  }

}