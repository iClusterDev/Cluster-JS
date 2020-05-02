import Component from "./core/Component";
import Container from "./components/Container";
import Filler from "./components/Filler";

export default class App extends Component {
  static get components() {
    return [Filler, Container];
  }

  render() {
    return this.html`
      <c-filler class="">
        <c-container fill-height class="primary">
          <div class="text-white">some content...</div>
        </c-container>
      </c-filler>
    `;
  }
}
