import { Component, html, classMap } from "../core/Component";
import button from "../modules/button";

class Button extends Component {
  static get styles() {
    return [super.styles, button.styles];
  }

  static get properties() {
    return { ...button.properties() };
  }

  render() {
    return html`<button class="btn ${classMap({ ...this.classes, ...button.classes.call(this) })}"><slot></slot></button>`;
  }
}

export default Button;
