import Component from "../core/Component";
import icon from "../modules/icon";

class Icon extends Component {
  static get styles() {
    return [super.styles, icon.styles];
  }
  static get properties() {
    return {
      ...icon.properties(),
    };
  }
  render() {
    return this.html`
      <span class="${this.classes({ ...icon.classes.call(this) })}"></span>
    `;
  }
}

export default Icon;
