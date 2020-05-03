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
          <span class="icon-activity"></span>
        </c-container>
      </c-filler>
    `;
  }
}
