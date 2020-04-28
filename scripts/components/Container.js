import { Cluster, html, classMap } from "./Cluster";
import config from "../configs/container.config";

class Container extends Cluster {
  static get styles() {
    this.classes;
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
