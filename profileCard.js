const tempalate = document.createElement('template');
tempalate.innerHTML = `<style>
h3{
     color:coral;
}
</style>`

//Class with the Constructor
class ProfileCard extends HTMLElement {
    constructor(){
        super();
// Creating ShawdowDOM for encapuslization
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(tempelate.cloneNode(true))
        this.innerHTML = `<style>h3{color:coral}</style><h3>${this.getAttribute('name')}<h3>`;

    }
}

window.customElements.define('profile-card',ProfileCard);