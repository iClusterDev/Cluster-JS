import Module from "../core/Module";
import css from "../../styles/components/button.scss";

const button = new Module(css, ["outlined", "text", "disabled", "large", "small", "squared", "rounded", "block", "raised", "fab"]);

export default {
  styles: button.styles(),
  classes: button.classes(),
  properties: button.properties(),
};
