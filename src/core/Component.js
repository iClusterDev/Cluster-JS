import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import cluster from "../../styles/cluster.scss";

// FIXME
// move this into utils?
const kebab = (string) => {
  return "c" + string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

class Component extends LitElement {
  constructor() {
    super();
    this.css = css;
    this.html = html;
    this.classes = classMap;
  }

  static get styles() {
    return [cluster];
  }

  static get components() {
    return [];
  }

  static mount() {
    customElements.define(kebab(this.name), this);
    if (this.components && this.components.length > 0) {
      for (const component of this.components) {
        component.mount();
      }
    }
  }
}

export default Component;
