import { Cluster, html } from "./Cluster";
import { classMap } from "lit-html/directives/class-map";
import container from "../../styles/components/container.scss";

class Container extends Cluster {
  static get styles() {
    this.classes;
    return [super.styles, container];
  }

  static get properties() {
    return {
      fillHeight: {
        attribute: "fill-height",
        reflect: true,
        type: Boolean,
      },
      fillWidth: {
        attribute: "fill-width",
        reflect: true,
        type: Boolean,
      },
      fillSpace: {
        attribute: "fill-space",
        reflect: true,
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      <div
        class="container tertiary ${classMap({
          "fill-height": this.fillHeight,
          "fill-width": this.fillWidth,
          "fill-space": this.fillSpace,
        })}"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("c-container", Container);
