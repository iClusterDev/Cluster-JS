const toKebab = (string) => {
  return "c" + string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

export { toKebab };
