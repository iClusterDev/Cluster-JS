import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import clusterCSS from "../../styles/cluster.scss";

class Component extends LitElement {
  // gets in the module.css
  static get styles() {
    return [clusterCSS];
  }

  // gets in the module.properties

  constructor() {
    super();
    this.css = css;
    this.html = html;
    this.classes = classMap;
  }

  // ...in the template
  // gets in the module.classes
}

export default Component;
