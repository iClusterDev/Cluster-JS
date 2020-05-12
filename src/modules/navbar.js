import Module from "../core/Module";
import css from "../../styles/components/navbar.scss";

const navbar = new Module(css, ["fixed", "large", "stacked"]);

export default {
  styles: navbar.styles(),
  classes: navbar.classes(),
  properties: navbar.properties(),
};
