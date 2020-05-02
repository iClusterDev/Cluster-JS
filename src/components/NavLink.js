import Link from "./Link";
import navlink from "../modules/navlink";

class NavLink extends Link {
  static get styles() {
    return [super.styles, navlink.styles];
  }

  static get properties() {
    return {
      ...super.properties,
      ...navlink.properties(),
    };
  }

  render() {
    return this.html`
    <a href="${this.href}" target="${this.target}" class="nav-link ${this.classes({ ...navlink.classes.call(this) })}"><slot></slot></a>
    `;
  }
}

export default NavLink;
