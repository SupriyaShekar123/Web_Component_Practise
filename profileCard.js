//Class with the Constructor

class ProfileCard extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `<h3>${this.getAttribute('name')}<h3>`;

    }
}

window.customElements.define('profile-card',ProfileCard);