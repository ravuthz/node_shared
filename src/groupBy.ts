export type Item = {
  [key: string]: any;
};

export type FnCallbackVal = (current: Item[], value: any, item: Item) => any;

export const groupByNestedKeys = (
  items: any[],
  keys: string[],
  cbVal: FnCallbackVal
) => {
  const grouped = items.reduce((result, item) => {
    let current = result;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = item[key];
      if (i === keys.length - 1) {
        current = cbVal(current, value, item);
      } else {
        if (!current[value]) {
          current[value] = {};
        }
        current = current[value];
      }
    }
    return result;
  }, {});
  return grouped;
};

export const groupArrayByKeys = (items: Item[], keys: string[]) => {
  return groupByNestedKeys(items, keys, (res, key, val) => {
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(val);
    return res;
  });
};

export const groupObjectByKeys = (items: Item[], keys: string[]) => {
  return groupByNestedKeys(items, keys, (res, key, val) => {
    if (!res[key]) {
      res[key] = {};
    }
    Object.assign(res[key], val);
    return res;
  });
};
