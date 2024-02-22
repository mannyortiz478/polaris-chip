import { LitElement, html, css } from 'lit';
/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyAlert extends LitElement {

    static get tag() {
        return 'alert-frame';
    }

    constructor() {
        super();
        this.message = "";
        this.month = "November";
        this.day = 9;
        this.year = 2024;
    }

    static get styles() {
        return css`
    :host {
      display: block;
    }
      a {
  text-decoration: none;
}

.alert-container {
    background-color: #ffd100;
    width: auto;
    border: black;
    border: 1px solid;
    border-radius: 12px;
    margin: auto;
    padding: 1px;
    text-align: center;
    display: block;
}
.date {
    text-align: left;
    color: white;
    margin-left: 20px;
}
.minimize-alert {
    text-align: right;
    margin: 15px;
    width: auto;
}
.close-btn  {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    letter-spacing: 0.03rem;
    text-align: right
}
.message-wrap {
    padding: 15px;
}
.alert-message {
    color: black;
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.25rem;
    display: inline;
    font-weight: 700;
    letter-spacing: 0.03rem;
}
#sticky {
    position: fixed;
    top: 0;
    width: 99.5%;
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
    hideAlert() {
        const alertContainer = this.shadowRoot.getElementById('sticky');
        alertContainer.style.display = 'none';
    }

    render() {
        return html`
        <div class="alert-container" id="sticky">
        <div class="minimize-alert">
                <span @click="${this.hideAlert}">
                    <button class="close-btn">X Close</button>
                </span>
            </div> 
            <div class="date">
                <h3>${this.month} ${this.day}, ${this.year}</h3>
            </div>          
            <div class="message-wrap">
                <div class="alert-message">
                    <p>${this.message}</p>
                </div>

            </div>

        </div>
  `;
    }

    static get properties() {
        return {
            message: { type: String },
            month: { type: String },
            day: { type: Number },
            year: { type: Number },
            fancy: { type: Boolean, reflect: true },
        };
    }
}

globalThis.customElements.define(MyAlert.tag, MyAlert);
