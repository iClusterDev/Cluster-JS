class Mapper {
  constructor(classes = []) {
    this.classes = classes;
  }

  propertyMap() {
    return this.classes.reduce((propertyMap, name) => {
      propertyMap[name] = {
        type: Boolean,
        reflect: true,
        attribute: name,
      };
      return propertyMap;
    }, {});
  }

  classMap(destObj) {
    return this.classes.reduce((classMap, name) => {
      classMap[name] = destObj[name] || false;
      return classMap;
    }, {});
  }
}

export default Mapper;
