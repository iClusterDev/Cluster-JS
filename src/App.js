import Component from "./core/Component";
import Container from "./components/Container";

export default class App extends Component {
  render() {
    return this.html`
      <div class="primary">
        <div class="container">container</div>
      </div>
    `;
  }
}
