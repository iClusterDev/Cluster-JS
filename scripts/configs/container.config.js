import css from "../../styles/components/container.scss";

class Module {
  constructor(classList = []) {
    this.classList = Array.isArray(classList) && classList.length > 0 ? classList : [];
  }

  propertyMap() {
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

  classMap() {
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

// console.log(module.classMap.call(this))();

export default {
  styles: css,
  classes: module.classMap(),
  properties: module.propertyMap(),
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
