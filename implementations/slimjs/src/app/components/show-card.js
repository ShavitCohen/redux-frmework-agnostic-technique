import { tag, template, useShadow } from "slim-js/Decorators";

@tag('show-card')
@template(/*html*/`
<style>
  :host-context([has-selection]) {
    opacity: 0.06;
    pointer-events: none;
    filter: blur(3px);
  }
  :host([selected]) {
    opacity: 1;
    filter: blur(0);
  }
  :host {
    display: inline-flex;
    background-color: white;
    color: black;
    padding: 1rem;
    width: 14rem;
    height: 23rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid rgb(215, 215, 215);
  }

  :host img {
    border-radius: 0.5rem;
  }
</style>
<h3>{{show.name}}</h3>
<img bind:src="show.image" bind:alt="show.name" />
`)
@useShadow(true)
class ShowCard extends Slim {}