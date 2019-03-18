import { tag, template, useShadow } from "slim-js/Decorators";

@tag('show-card')
@template(/*html*/`
<style>
  :host {
    display: inline-flex;
    background-color: white;
    color: black;
    padding: 1rem;
    width: 14rem;
    height: 21rem;
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
<div>score: {{roundScore(show.score)}}</div>
`)
@useShadow(true)
class ShowCard extends Slim {

  roundScore (score = 0) {
    return score.toFixed(1);
  }
}