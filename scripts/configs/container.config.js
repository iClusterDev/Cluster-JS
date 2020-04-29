import css from "../../styles/components/container.scss";

class Module {
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

const module = new Module(["fill-height", "fill-height", "fill-space"]);

// console.log(module.classes.call(this))();

export default {
  styles: css,
  classes: module.classes(),
  properties: module.properties(),
  // classes: function () {
  //   return {
  //     "fill-height": this.fillHeight,
  //     "fill-width": this.fillWidth,
  //     "fill-space": this.fillSpace,
  //   };
  // },
  // properties: function () {
  //   return {
  //     fillHeight: {
  //       attribute: "fill-height",
  //       reflect: true,
  //       type: Boolean,
  //     },
  //     fillWidth: {
  //       attribute: "fill-width",
  //       reflect: true,
  //       type: Boolean,
  //     },
  //     fillSpace: {
  //       attribute: "fill-space",
  //       reflect: true,
  //       type: Boolean,
  //     },
  //   };
  // },
};
