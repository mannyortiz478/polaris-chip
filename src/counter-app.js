import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/multiple-choice/lib/confetti-container.js";
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
        this.max = "100"
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
    width: 475px;
    border: black;
    border: 3px solid #FFD700;
    border-radius: 24px;
    margin: 40px auto;
    padding: 50px;
    text-align: center;
}

.number-display {
    background-color: white;
    width: 350px;
    color: var(--counter-color, black);
    text-align: center;
    font-size: 96px;
    border: 3px solid black;
    border-radius: 24px;
    margin: 20px auto;
    padding: 24px;
}

.increase-btn {
    background-color: #007f5c;
    color: white;
    font-size: 48px;
    border: 2px solid white;
    border-radius: 48px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
}

.decrease-btn {
    background-color: #e8000d;
    color: white;
    font-size: 48px;
    border: 2px solid white;
    border-radius: 48px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
}

.increase-btn:hover {
    background-color: #3cd070;
} 

.decrease-btn:hover {
    background-color: #ff0800;
}

.increase-btn:focus, .decrease-btn:focus {
    border: 2.5px solid yellow;
}

@media screen and (max-width: 800px) and (min-width: 500px){ .btn { display: none; } }
    `;
    }

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
        else if (this.number == this.min) {
            this.color = "pink";
        }
        else if (this.number == this.max) {
            this.color = "pink"
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
            this.color = "#FF4500";
        }
        else if (this.number == this.min) {
            this.color = "pink";
        }
        else if (this.number == this.max) {
            this.color = "pink"
        }
        else {
            this.color = "grey";
        }
    }


    render() {
        return html`
        <div class="counter-frame">
        <confetti-container id="confetti">
            <div class="number-display" style="--counter-color: ${this.color}">
                ${this.number}
            </div>
        </confetti-container>
            <div class="buttons">
            <button class="increase-btn" @click="${this.increase}" ?disabled="${this.max === this.number}">+</button>
            <button class="decrease-btn" @click="${this.decrease}" ?disabled="${this.min === this.number}">-</button>
            </div>
        </div>
  `;
    }

    static get properties() {
        return {
            number: { type: Number },
            min: { type: Number },
            max: { type: Number },
            color: { type: String },
            fancy: { type: Boolean, reflect: true },
        };
    }
    updated(changedProperties) {
        if (changedProperties.has('number') && this.number == 21) {
            this.makeItRain();
        }
    }

    makeItRain() {
        // this is called a dynamic import. It means it won't import the code for confetti until this method is called
        // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
        // will only run AFTER the code is imported and available to us
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
            (module) => {
                // This is a minor timing 'hack'. We know the code library above will import prior to this running
                // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
                // this "hack" ensures the element has had time to process in the DOM so that when we set popped
                // it's listening for changes so it can react
                setTimeout(() => {
                    // forcibly set the poppped attribute on something with id confetti
                    // while I've said in general NOT to do this, the confetti container element will reset this
                    // after the animation runs so it's a simple way to generate the effect over and over again
                    this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
                }, 0);
            }
        );
    }
}

globalThis.customElements.define(MyCounter.tag, MyCounter);
