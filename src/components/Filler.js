import Component from "../core/Component";
import filler from "../modules/filler";

class Filler extends Component {
  static get styles() {
    return [super.styles, filler.styles];
  }

  render() {
    return this.html`
      <div class="filler"><slot></slot></div>
    `;
  }
}

export default Filler;
