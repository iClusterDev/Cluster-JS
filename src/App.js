import { Component, html } from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import Icon from "./components/Icon";

export default class App extends Component {
  static get components() {
    return [Filler, Container, Icon];
  }

  render() {
    return html`
      <c-filler class="secondary">
        <c-container class="primary" fill-height>
          <c-icon class="text-white" name="home"></c-icon>
        </c-container>
      </c-filler>
    `;
  }
}
