import { Cluster, html, classMap } from "./Cluster";
import config from "../configs/container";

class Container extends Cluster {
  static get styles() {
    return [super.styles, config.styles];
  }

  static get properties() {
    return { ...config.properties() };
  }

  render() {
    return html`
      <div class="container ${classMap({ ...config.classes.call(this), ...this.classes })}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("c-container", Container);
