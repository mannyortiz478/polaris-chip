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
        this.isOpen = false;
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
    display: flex;
    justify-content: center;
    border: 1px solid;
    border-radius: 12px;
    margin: auto;
    padding: 1px;
    text-align: center;
}

.hidden-alert-container {
    background-color: #ffd100;
    width: auto;
    border: black;
    display: flex;
    justify-content: center;
    border: 1px solid;
    border-radius: 12px;
    margin: auto;
    padding: 1px;
    text-align: center;
}
.date {
    text-align: left;
    color: white;
    margin-left: 5px;
}
.minimize-alert {
    text-align: right;
    margin: 5px;
    width: auto;
}

.maximize-alert {
    text-align: center;
    margin-top: 10px;
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
    //letter-spacing: 0.03rem;
    text-align: right
}
.view-btn {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    //letter-spacing: 0.03rem;
    text-align: center;
    display: inline;  
}
.message-wrap {
    padding: 15px;
    height: 100%;
    width: 75%;
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

.hidden-message, .small-message {
    color: black;
    font-size: 2rem;
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
    z-index: 100;
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
    hiddenAlert() {
        this.isOpen = false;
    }

    openAlert() {
        this.isOpen = true;
    }

    hiddenAlertContent() {
        return html`
        <div class="hidden-alert-container" id="sticky">
            <div class="date">
                <h3>${this.month} ${this.day}, ${this.year}</h3>
            </div>
            <div class="message-wrap">
                <div class="small-message">
                <svg height=50px width=65px xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>          
                    <p class="hidden-message">There is an alert!!</p>
                </div>
                <div class="maximize-alert">
                <span @click="${this.openAlert}">
                    <button class="view-btn">View</button>
                </span>
            </div> 
            </div>
        </div>
        `
    }

    openAlertContent() {
        return html`
        <div class="alert-container" id="sticky">
            <div class="date">
                <h3>${this.month} ${this.day}, ${this.year}</h3>
            </div>
            <svg height=50px width=65px xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>          
            <div class="message-wrap">
                <div class="alert-message">
                    <p>${this.message}</p>
                </div>
            </div>
            <div class="minimize-alert">
                <span @click="${this.hiddenAlert}">
                    <button class="close-btn">X Close</button>
                </span>
            </div> 

        </div>
        `
    }

    render() {
        if (this.isOpen) {
            return this.openAlertContent();
        } else {
            return this.hiddenAlertContent();
        }
    }

    static get properties() {
        return {
            isOpen: { type: String },
            message: { type: String },
            month: { type: String },
            day: { type: Number },
            year: { type: Number },
            alertColor: { type: String },
            sticky: { type: String },
            status: { tyep: Boolean },
            fancy: { type: Boolean, reflect: true },
        };
    }
}

// globalThis.customElements.define(MyAlert.tag, MyAlert);
// updated(changedProperties){
//     if (changedProperties.has('open')) {

//     }
// }

globalThis.customElements.define(MyAlert.tag, MyAlert);