import { Component, html, classMap } from "../core/Component";
import navbar from "../modules/navbar";
import Filler from "./Filler";
import Container from "./Container";

class Navbar extends Component {
  static get styles() {
    return [super.styles, navbar.styles];
  }

  static get properties() {
    return { ...navbar.properties() };
  }

  static get components() {
    return [Filler, Container];
  }

  render() {
    return html`
      <div class="navbar primary text-white ${classMap({ ...this.classes, ...navbar.classes.call(this) })}">
        navbar
      </div>
    `;
  }
}

export default Navbar;
