import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import cluster from "../../styles/cluster.scss";

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

  static mount(name) {
    return customElements.define(name, this);
  }
}

export default Component;
