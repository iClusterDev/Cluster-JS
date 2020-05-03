import { Component, html } from "../core/Component";

class MaterialIcon extends Component {
  static get properties() {
    return {
      name: {
        attribute: "name",
        reflect: true,
        type: String,
      },
    };
  }

  render() {
    return html`
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <i class="material-icons">${this.name}</i>
    `;
  }
}

export default MaterialIcon;
