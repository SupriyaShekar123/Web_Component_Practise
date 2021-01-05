const template = document.createElement('template');
template.innerHTML = `
<style>
.profile-card{
    font-family:"Arial", sans-serif;
    background: #f4f4f4;
    width: 500px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-gap:10px;
    margin-bottom : 15px;
    border-bottom: darkorchid 5px solid;
}
.profile-card img{
    width:100%;
}
.profile-card button{
 cursor:pointer;
 background:darkorchid;
 color: #fff;
 border:0;
 border-radius: 5px;
 padding:5px 10px;
}

</style>
<div class="profile-card">
    <img />
    <div>
    <h3></h3>
    <div class="info>
    <p><slot name="email"/></p>
    <p><slot name="phone"/></p>
    <p><slot name="em"/></p>
    </div>
    <button id="toggle-info">Hide Info</button>
    </div>
</div>`;

//Class with the Constructor
class ProfileCard extends HTMLElement {
    constructor(){
        super();
// Creating ShawdowDOM for encapuslization
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
         this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

    }
}

window.customElements.define('profile-card',ProfileCard);