import Module from "../core/Module";
import css from "../../styles/components/filler.scss";

const filler = new Module(css);

export default {
  styles: filler.styles(),
};
