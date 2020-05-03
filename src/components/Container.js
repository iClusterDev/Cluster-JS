import { Component } from "../core/Component";
import container from "../modules/container";

class Container extends Component {
  static get styles() {
    return [super.styles, container.styles];
  }

  static get properties() {
    return { ...container.properties() };
  }

  render() {
    return this.html`
      <div class="container ${this.classes({ ...container.classes.call(this) })}"><slot></slot></div>
    `;
  }
}

export default Container;
