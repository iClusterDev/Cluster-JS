import { Component, html } from "./core/Component";
import Container from "./components/Container";
import Button from "./components/Button";
import Filler from "./components/Filler";
import Icon from "./components/Icon";
import Navbar from "./components/Navbar";

export default class App extends Component {
  static get components() {
    // return [Filler, Button, Container, Icon, Navbar];
    return [Navbar];
  }

  render() {
    return html` <c-navbar> </c-navbar> `;
  }
}
