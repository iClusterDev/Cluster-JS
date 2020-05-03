import { Component, html, classMap } from "../core/Component";
import filler from "../modules/filler";

class Filler extends Component {
  static get styles() {
    return [super.styles, filler.styles];
  }

  render() {
    return html`
      <div class="filler ${classMap({ ...this.classes })}">
        <slot></slot>
      </div>
    `;
  }
}

export default Filler;
