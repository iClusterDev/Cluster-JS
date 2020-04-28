import { Cluster, html } from "./Cluster";

class App extends Cluster {
  static get styles() {
    return [super.styles];
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("c-app", App);
