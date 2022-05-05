export const deepClone = object => {
  if (!isObject(object) || isFunction(object)) return object;
  let result = {};
  for (let key in object) {
    if (object[key] instanceof Object && !isFunction(object[key])) {
      result[key] = deepClone(object[key]);
    } else {
      result[key] = object[key];
    }
  }
  return result;
};

export function isObject(obj) {
  return obj instanceof Object;
}

export function isFunction(obj) {
  return typeof obj === "function";
}
