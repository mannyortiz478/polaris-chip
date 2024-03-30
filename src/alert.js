import { LitElement, html, css } from 'lit';
/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyAlert extends LitElement {

    static get tag() {
        return 'campus-alert';
    }

    constructor() {
        super();
        this.date = "";
        this.isOpen = false;
        this.status = "";
        this.sticky = true;
    }

    static get styles() {
        return css`
    :host {
        --none-text-color: black;
        --none-bg-color: #ffd100;

        --notice-text-color: black;
        --notice-bg-color: #007bff;

        --warning-text-color: black;
        --warning-bg-color: #FFEF00; 

        --alert-text-color: black;
        --alert-bg-color: red; 
    }
    :host([status="none"]) .alert-container {
        background-color: var(--none-bg-color);
        color: var(--none-text-color);
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
    :host([status="none"]) .hidden-alert-container {
        background-color: var(--none-bg-color);
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
    :host([status="notice"]) .alert-container {
        background-color: var(--notice-bg-color);
        color: var(--notice-text-color);
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
    :host([status="notice"]) .hidden-alert-container {
        background-color: var(--notice-bg-color);
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

    :host([status="warning"]) .alert-container{
        background-color: var(--warning-bg-color);
        color: var(--warning-text-color);
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
    :host([status="warning"]) .hidden-alert-container {
        background-color: var(--warning-bg-color);
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

    :host([status="alert"]) .alert-container {
        background-color: var(--alert-bg-color);
        color: var(--alert-text-color);
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
    :host([status="alert"]) .hidden-alert-container {
        background-color: var(--alert-bg-color);
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
    :host([sticky]) .alert-container,
    :host([sticky]) .hidden-alert-container {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }


//#ffd100
.alert-container {
    background-color: var(--none-bg-color);
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
    background-color: var(--none-bg-color);
    width: 100%;
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
.open-btn {
    background-color: transparent;
    color: black;
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
    padding: 10px;
    height: 100%;
    width: 75%;
}
.alert-message { 
    color: var(--none-text-color);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.25rem;
    display: inline;
    font-weight: 700;
    letter-spacing: 0.03rem;
}

.hidden-message {
    color: var(--none-text-color);
    font-size: 1.7rem;
    font-style: italic;
    line-height: 1.25rem;
    display: inline;
    font-weight: 700;
    letter-spacing: 0.03rem; 
}

.sticky {
    position: sticky;
    top: 0;
    width: 99.5%;
    z-index: 100;
}


@media screen and (max-width: 800px) and (min-width: 500px){ .btn { display: none; } }
    `;
    }

    toggleAlert() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            localStorage.removeItem('alertIsOpen');
            this.sticky = true;
        } else {
            localStorage.setItem('alertIsOpen', 'false');
            this.sticky = false;
        }
    }


    hiddenAlert() {
        setTimeout(() => {
            this.isOpen = false;
            this.shadowRoot.querySelector('.open-btn').focus()
        }, 0);
    }

    openAlert() {
        this.shadowRoot.querySelector('.close-btn').focus();
    }

    //     if(this.sticky == true) {
    //     this.classList.add('sticky');
    // }
    //     else {
    //     this.classList.remove('sticky');
    // }

    hiddenAlertContent() {
        return html`
        <div class="hidden-alert-container">
            <div class="date">
                <h3>${this.date}</h3>
            </div>
            <div class="message-wrap">
                <div class="small-message">
                    <button class="open-btn" @click="${this.toggleAlert}" tabindex=0>
                <svg height=50px width=65px xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>          
                    <p class="hidden-message">There is an alert!!</p>
                    </button>
                </div>
            </div> 
            </div>
        </div>
        `
    }

    openAlertContent() {
        return html`
        <div class="alert-container">
            <div class="date">
                <h3>${this.date}</h3>
            </div>
            <svg height=100px width=100px xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>          
            <div class="message-wrap">
                <div class="alert-message">
                    <slot></slot>
                </div>
            </div>
            <div class="minimize-alert">
                <span>
                    <button class="close-btn"  @click="${this.toggleAlert}">X Close</button>
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

            date: { type: String },
            alertColor: { type: String },
            sticky: { type: Boolean, reflect: true },
            status: { type: String },
            fancy: { type: Boolean, reflect: true },
        };
    }

}
globalThis.customElements.define(MyAlert.tag, MyAlert);