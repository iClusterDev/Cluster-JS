import { LitElement, html } from "lit-element";
import clusterCSS from "../../styles/cluster.scss";

class Cluster extends LitElement {
  static get styles() {
    return [clusterCSS];
  }
}

export { Cluster, html };
