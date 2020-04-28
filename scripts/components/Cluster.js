import { LitElement, html } from "lit-element";
import clusterCSS from "../../styles/cluster.scss";

class Cluster extends LitElement {
  static get styles() {
    return [clusterCSS];
  }

  static get classesToProperties() {
    return (classes) => {
      return classes.reduce((propertyMap, className) => {
        propertyMap[className] = {
          type: Boolean,
          reflect: true,
          attribute: className,
        };
        return propertyMap;
      }, {});
    };
  }
}

// propertyMap() {
//   return this.classes.reduce((propertyMap, name) => {
//     propertyMap[name] = {
//       type: Boolean,
//       reflect: true,
//       attribute: name,
//     };
//     return propertyMap;
//   }, {});
// }

export { Cluster, html };
