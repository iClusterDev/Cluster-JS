import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";

export default class App extends Component {
  static get components() {
    return [Filler, Container];
  }

  render() {
    return this.html`
      <div class="primary">
        <c-filler>
          <c-container fill-height>
            <div class="text-primary">some content...</div>
          </c-container>
        </c-filler>
      </div>
    `;
  }
}
