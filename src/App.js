import Component from "./core/Component";

class App extends Component {
  // static get styles() {
  //   return [super.styles];
  // }

  render() {
    return this.html`
      <div class="primary">
        <div class="container">container</div>
      </div>
    `;
  }
}

customElements.define("c-app", App);
