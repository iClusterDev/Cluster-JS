import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import Link from "./components/Link";
import NavLink from "./components/NavLink";

export default class App extends Component {
  static get components() {
    return [Filler, Container, Link, NavLink];
  }

  render() {
    return this.html`
      <c-filler>
        <c-container>
          <div>some content with a <c-nav-link underline href="#">home</c-nav-link> ...</div>
        </c-container>
      </c-filler>
    `;
  }
}
