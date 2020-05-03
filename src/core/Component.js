import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { toKebab } from "../utils/functions";
import cluster from "../../styles/cluster.scss";

class Component extends LitElement {
  constructor() {
    super();
    this.html = html;
    this.classes = function (classInfo = {}) {
      return classMap({
        ...classInfo,
        ...Array.from(this.classList).reduce((classMap, className) => {
          classMap[className] = true;
          return classMap;
        }, {}),
      });
    };
  }

  static get css() {
    return css;
  }

  static get styles() {
    return [cluster];
  }

  static get components() {
    return [];
  }

  static mount() {
    customElements.define(toKebab(this.name), this);
    if (this.components && this.components.length > 0) {
      for (const component of this.components) {
        component.mount();
      }
    }
  }
}

export { Component, html, css, classMap };
