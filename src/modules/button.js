import Module from "../core/Module";
import css from "../../styles/components/button.scss";

const button = new Module(css, []);

export default {
  styles: button.styles(),
  classes: button.classes(),
  properties: button.properties(),
};
