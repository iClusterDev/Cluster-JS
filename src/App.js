import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import Link from "./components/Link";
import NavLink from "./components/NavLink";
import MaterialIcon from "./components/MaterialIcon";

export default class App extends Component {
  static get components() {
    return [Filler, Container, Link, NavLink, MaterialIcon];
  }

  render() {
    return this.html`
      <c-filler>
        <c-container>
          <div>...some content</div>
          <c-material-icon name="home" class="text-primary"></c-material-icon>
        </c-container>
      </c-filler>
    `;
  }
}
