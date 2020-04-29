import css from "../../styles/components/filler.scss";
import Component from "../core/Component";

const filler = new Component(css);

export default {
  styles: filler.styles(),
};
