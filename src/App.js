import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import Link from "./components/Link";
import NavLink from "./components/NavLink";
// import Icon from "./components/Icon";

export default class App extends Component {
  static get components() {
    return [Filler, Container, Link, NavLink];
  }

  render() {
    return this.html`
      <c-filler>
        <c-container>
          <span class="icon-home"></span>
        </c-container>
      </c-filler>
    `;
  }
}
