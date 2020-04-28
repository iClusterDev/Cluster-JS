import { Cluster, html, classMap } from "./Cluster";
import config from "../configs/filler.config";

class Filler extends Cluster {
  static get styles() {
    return [super.styles, config.styles];
  }

  render() {
    return html`
      <div class="filler ${classMap({ ...this.classes })}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("c-filler", Filler);
