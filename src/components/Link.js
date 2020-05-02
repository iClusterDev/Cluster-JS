import Component from "../core/Component";
import link from "../modules/link";

class Link extends Component {
  static get styles() {
    return [super.styles, link.styles];
  }

  static get properties() {
    return {
      href: {
        attribute: "href",
        reflect: true,
        type: String,
      },
      target: {
        attribute: "target",
        reflect: true,
        type: String,
      },
    };
  }

  render() {
    return this.html`
      <a href="${this.href}" target="${this.target}" class="link ${this.classes()}">link</a>
    `;
  }
}

export default Link;
