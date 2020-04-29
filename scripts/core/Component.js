import Module from "./Module";

export default class Component extends Module {
  constructor(css, classList = []) {
    super(classList);
    this.css = css;
  }

  styles() {
    return this.css;
  }
}
