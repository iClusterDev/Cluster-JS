import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";
import Link from "./components/Link";

export default class App extends Component {
  static get components() {
    return [Filler, Container, Link];
  }

  render() {
    return this.html`
      <c-filler>
        <c-container>
          <div>some content with a <c-link href="http://www.google.com" target="_blank">link</c-link> ...</div>
        </c-container>
      </c-filler>
    `;
  }
}
