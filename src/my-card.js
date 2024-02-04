import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.link = "#"
    this.image = "";
    this.paragraph = "";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      a {
  text-decoration: none;
}

.control-wrapper {
  margin-bottom: 15px;
}

.card.change-bg{
  background-color: orange;
}


#cardlist {
  display: flex;
}

.duplicate {
  background-color: green;
  color: white;
  font-size: 16px;
  border-radius: 12%;
  padding: 8px;
}

#changetitle {
  background-color: grey;
  color: white;
  font-size: 16px;
  border-radius: 12%;
  padding: 8px;
}

#changeimage {
  background-color: black;
  color: white;
  font-size: 16px;
  border-radius: 12%;
  padding: 8px;
}
#change {
  background-color: green;
  color: white;
  font-size: 16px;
  border-radius: 12%;
  padding: 8px;
}
#delete-card {
  background-color: red;
  color: white;
  font-size: 16px;
  border-radius: 12%;
  padding: 8px;
}
#bg-change {
  background-color: purple;
  color: white;
  font-size: 16px;
  border-radius: 10%;
  padding: 8px;
}

button:hover {
  border: 3px solid yellow;
}

.card {
  background-color: #42A5F5;
  text-align: center;
  border-radius: 10%;
  width: 400px;
  padding: 4px;
  margin: 16px 16px 16px 16px;
  border: 5px solid red;
}

img {
  text-align: center;
  width: 200px;
}

h1 {
  color: white;
  font-size: 35px;
  text-align: center
}

.title {
  color: blue;
  font-size: 35px;
  text-align: center;
}

p {
  color: white;
  font-size: 15px;
}

.details-btn {
  background-color: green;
  color: white;
  font-size: 16px;
  border: 2px solid yellow;
  border-radius: 12%;
  padding: 8px;
}

@media screen and (max-width: 800px) and (min-width: 500px){ .btn { display: none; } }
    `;
  }

  render() {
    return html`
    <div id="cardlist">
    <div class="card">
      <h1 class="card-title">${this.title}</h1>
      <img class="card-image" src="${this.image}">
    <div class="card-details">
      <p>${this.paragraph}</p>
      <a href="${this.link}"><button class="details-btn">Details</button></a>
      </div>
    </div>
  </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String },
      paragraph: { type: String },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
