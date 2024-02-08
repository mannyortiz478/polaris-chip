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
    this.color = "#42A5F5";
    this.fancy = false;
  }

  static get styles() {
    return css`
    :host {
      display: block
    }
      :host([fancy]) .card {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
        margin: 10px;
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


.card-list {
  display: flex;
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

slot {
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
  margin-top: 7px;
}
details summary {
    text-align: center;
    color: red;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid pink;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

@media screen and (max-width: 800px) and (min-width: 500px){ .btn { display: none; } }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  render() {
    return html`
    <div id="cardlist">
    <div class="card" style="background-color: ${this.color}">
      <h1 class="card-title">${this.title}</h1>
      <img class="card-image" src="${this.image}">
    <div class="card-details">
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <div>
          <summary>Desciption</summary>
          <slot>${this.paragraph}</slot>
        </div>
      </details>
      <!--<p>${this.paragraph}</p>-->
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
      color: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
