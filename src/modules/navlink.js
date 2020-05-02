import Module from "../core/Module";
import css from "../../styles/components/link.scss";

const navlink = new Module(css, ["underline", "indicator"]);

export default {
  styles: navlink.styles(),
  classes: navlink.classes(),
  properties: navlink.properties(),
};
