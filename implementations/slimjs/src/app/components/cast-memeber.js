import { tag, template, useShadow } from "slim-js/Decorators";

@tag('cast-member')
@template(/*html*/`
<style>
  :host {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 120px;
    border: 1px solid #444;
    background-color: white;
    color: black;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid rgb(215, 215, 215);
    pointer-events: none;
  }
  :host img {
    width: calc(210px / 3);
    height: calc(295px / 3);
  }

  .character-name {
    font-weight: bold;
    margin: 0.5rem 0 0.5rem 0;
    min-height: 2.5rem;
    display: inline-flex;
    align-items: center;
  }

  .actor-name {
    margin: 0.5rem 0 0.5rem 0;
  }
</style>
<span class="character-name">{{member.character.name}}</span>
<img bind:src="member.character.image.medium"
  error="fallbackImage">
<span class="actor-name">{{member.person.name}}</span>
`)
@useShadow(true)
class CastMember extends Slim {
  fallbackImage ({target}) {
    target.src = 'https://vignette.wikia.nocookie.net/uncyclopedia/images/9/9b/Nonexistent.jpg/revision/latest';
  }
}