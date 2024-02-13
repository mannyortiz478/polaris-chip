import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCounter extends LitElement {

    static get tag() {
        return 'counter-app';
    }

    constructor() {
        super();
        this.number = 0;
        this.counter = "1"
        this.min = "0"
        this.max = "50"
        this.color = "";
    }

    static get styles() {
        return css`
    :host {
      display: block;
    }
      a {
  text-decoration: none;
}

.counter-frame {
    background-color: #3F7FBF;
    width: 175px;
    border: black;
    border: 3px solid green;
    margin: 30px;
    padding: 10px;
}

.number-display {
    background-color: white;
    width: 125px;
    color: var(--counter-color, grey);
    text-align: center;
    font-size: 24px;
    border: 3px solid black;
    margin: 10px;
    padding: 5px;
}

.increase-btn {
    background-color: green;
    color: white;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 12%;
    padding: 2px;
    margin-left: 7px;
}

.decrease-btn {
    background-color: red;
    color: white;
    font-size: 16px;
    border: 2px solid white;
    border-radius: 12%;
    padding: 2px;
    margin-right: 7px;
}

.increase-btn:hover, .decrease-btn:hover {
    border: 2.5px solid yellow;
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

    increase() {
        this.number++;
        if (this.number == 18) {
            this.color = "#FFD700"
        }
        else if (this.number == 21) {
            this.color = "#FF4500"
        }
        else {
            this.color = "grey"
        }
    }

    decrease() {
        this.number--;
        if (this.number == 18) {
            this.color = "#FFD700"
        }
        else if (this.number == 21) {
            this.color = "#FF4500"
        }
        else {
            this.color = "grey";
        }
    }


    render() {
        return html`
        <div class="counter-frame">
            <div class="number-display" style="--counter-color: ${this.color}">
                ${this.number}
            </div>
            <div class="buttons">
            <button class="increase-btn" @click="${this.increase}">Increase</button>
            <button class="decrease-btn" @click="${this.decrease}">Decrease</button>
            </div>

        </div>
  `;
    }

    static get properties() {
        return {
            number: { type: Number },
            counter: { type: String },
            min: { type: String },
            max: { type: String },
            color: { type: String },
            fancy: { type: Boolean, reflect: true },
        };
    }
}

globalThis.customElements.define(MyCounter.tag, MyCounter);
