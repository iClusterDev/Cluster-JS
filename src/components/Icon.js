import { Component, html, css } from "../core/Component";

class Icon extends Component {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 24px;
          height: 24px;
        }
      `,
    ];
  }

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

export default Icon;
