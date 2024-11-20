const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: [-4, 20],
      },
      k: "-45",
    },
    h: "Good Night Moon",
  },
};

function filterNestedObj(obj, predicateCb) {
  const filtered = {};
  for (let key in obj) {
    if (obj[key] != null && typeof obj[key] === "object") {
      const subFiltered = filterNestedObj(obj[key], predicateCb);
      if (Object.keys(subFiltered).length > 0) {
        filtered[key] = subFiltered;
      }
    } else {
      if (predicateCb(obj[key])) {
        filtered[key] = obj[key];
      }
    }
  }

  return filtered;
}

const f = filterNestedObj(obj, (v) => {
  if (!isNaN(v)) return true;
  return false;
});

console.log(JSON.stringify(f));
