import { Component, html } from "./core/Component";
import Container from "./components/Container";
import Button from "./components/Button";
import Filler from "./components/Filler";
import Icon from "./components/Icon";

export default class App extends Component {
  static get components() {
    return [Filler, Button, Container, Icon];
  }

  render() {
    return html`
      <c-filler>
        <c-container fill-height>
          <c-button fab raised>
            <c-icon name="add"></c-icon>
          </c-button>
        </c-container>
      </c-filler>
    `;
  }
}
