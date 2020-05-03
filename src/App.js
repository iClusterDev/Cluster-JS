import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import MaterialIcon from "./components/MaterialIcon";

export default class App extends Component {
  static get components() {
    return [Filler, Container, MaterialIcon];
  }

  render() {
    return this.html`
      <c-filler>
        <c-container>
          <h2>some content with a <a href="#" class="nav-link underline active">link</a></h2>
        </c-container>
      </c-filler>
    `;
  }
}
