import css from "../../styles/components/container.scss";

export default {
  styles: css,
  classes: function () {
    return {
      "fill-height": this.fillHeight,
      "fill-width": this.fillWidth,
      "fill-space": this.fillSpace,
    };
  },
  properties: function () {
    return {
      fillHeight: {
        attribute: "fill-height",
        reflect: true,
        type: Boolean,
      },
      fillWidth: {
        attribute: "fill-width",
        reflect: true,
        type: Boolean,
      },
      fillSpace: {
        attribute: "fill-space",
        reflect: true,
        type: Boolean,
      },
    };
  },
};
