import { LitElement, html, css } from "lit-element";
import { classMap, styleMap } from "lit-html/directives/class-map";
import styles from "../../styles/cluster.scss";

class Cluster extends LitElement {
  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.classes = Array.from(this.classList).reduce((classTable, className) => {
      classTable[className] = true;
      return classTable;
    }, {});
  }
}

export { Cluster, html, css, classMap, styleMap };
