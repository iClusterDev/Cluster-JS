export default class Module {
  constructor(classList = []) {
    this.classList = Array.isArray(classList) && classList.length > 0 ? classList : [];
  }

  properties() {
    const list = this.classList;
    return function () {
      return list.reduce((map, name) => {
        map[name] = {
          attribute: name,
          reflect: true,
          type: Boolean,
        };
        return map;
      }, {});
    };
  }

  classes() {
    const list = this.classList;
    return function () {
      return list.reduce((map, name) => {
        map[name] = this[name];
        return map;
      }, {});
    };
  }
}
