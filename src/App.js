import Component from "./core/Component";
import Container from "./components/Container";

export default class App extends Component {
  static get components() {
    return [Container];
  }

  render() {
    return this.html`
      <div class="primary">
        <c-container fill-height>app</c-container>
      </div>
    `;
  }
}
