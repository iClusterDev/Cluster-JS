import { Cluster, html } from "./Cluster";
import name from "../../styles/components/name.scss";

class Name extends Cluster {
  static get styles() {
    return [super.styles, name];
  }
  render() {
    return html`<div></div>`;
  }
}

customElements.define("c-name", Name);
