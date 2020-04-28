import { Cluster, html } from "./Cluster";
import Mapper from "../tools/Mapper";
import { classMap } from "lit-html/directives/class-map";
import container from "../../styles/components/container.scss";

const mapper = new Mapper(["fill-height", "fill-width", "fill-space"]);

class Container extends Cluster {
  static get styles() {
    this.classes;
    return [super.styles, container];
  }

  static get properties() {
    return { ...this.classesToProperties(["fill-height", "fill-width", "fill-space"]) };
  }

  static get classes() {
    console.log(this.properties);
  }

  render() {
    return html`
      <div class="container tertiary ${classMap({ ...mapper.classMap(this) })}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("c-container", Container);
