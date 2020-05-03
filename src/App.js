import { Component, html } from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import MaterialIcon from "./components/MaterialIcon";

export default class App extends Component {
  static get components() {
    return [Filler, Container, MaterialIcon];
  }

  render() {
    return html`
      <c-filler class="secondary">
        <c-container class="primary" fill-height>
          <h2>some content with a <a href="#" class="link">link</a></h2>
          <p>Some content</p>
        </c-container>
      </c-filler>
    `;
  }
}
