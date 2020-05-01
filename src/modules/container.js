import Module from "../core/Module";
import css from "../../styles/components/container";

const container = new Module(css, ["fill-height", "fill-width", "fill-space"]);

export default {
  styles: container.styles(),
  classes: container.classes(),
  properties: container.properties(),
};
