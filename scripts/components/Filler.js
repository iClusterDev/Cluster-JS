import { Cluster, html } from "./Cluster";
import filler from "../../styles/components/filler.scss";

class Filler extends Cluster {
  static get styles() {
    return [super.styles, filler];
  }
  render() {
    return html`
      <div class="filler">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("c-filler", Filler);
