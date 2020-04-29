import css from "../../styles/components/container.scss";
import Component from "../core/Component";

const container = new Component(css, ["fill-height", "fill-width", "fill-space"]);

export default {
  styles: container.styles(),
  classes: container.classes(),
  properties: container.properties(),
};
