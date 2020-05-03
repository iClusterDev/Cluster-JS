import { Component } from "./core/Component";
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
          <h2>some content with a <a href="#" class="link">link</a></h2>
          <p>Some content</p>
        </c-container>
      </c-filler>
    `;
  }
}
