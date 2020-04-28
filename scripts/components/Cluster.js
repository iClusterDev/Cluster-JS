import { LitElement, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import clusterCSS from "../../styles/cluster.scss";

class Cluster extends LitElement {
  static get styles() {
    return [clusterCSS];
  }

  constructor() {
    super();
    this.classes = Array.from(this.classList).reduce((classTable, className) => {
      classTable[className] = true;
      return classTable;
    }, {});
  }
}

export { Cluster, html, classMap };
