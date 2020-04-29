import css from "../../styles/components/container.scss";
import Component from "../core/Component";

const component = new Component(css, ["fill-height", "fill-width", "fill-space"]);

export default {
  styles: component.styles(),
  classes: component.classes(),
  properties: component.properties(),
};
