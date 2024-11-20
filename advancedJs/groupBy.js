const items = [
  {
    id: 1,
    kind: "a",
  },
  {
    id: 2,
    kind: "b",
  },
  {
    id: 3,
    kind: "a",
  },
];

Object.prototype.groupBy = function (items, callback) {
  const groups = {};
  for (let item of items) {
    if (groups[item.kind]) {
      groups[item.kind].push(item);
    } else {
      groups[item.kind] = [item];
    }
  }
  return groups;
};

const groups = Object.groupBy(items, (each) => each.kind);

console.log(groups);
