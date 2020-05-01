import Component from "../core/Component";
import container from "../modules/container";

class Container extends Component {
  static get styles() {
    return [super.styles, container.styles];
  }

  static get properties() {
    return { ...container.properties() };
  }

  // FIXME
  // add classmap to container
  render() {
    return this.html`
      <div class="container ${this.classes({ "fill-height": true })}"><slot></slot></div>
    `;
  }
}

export default Container;
