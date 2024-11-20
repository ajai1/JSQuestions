const array = [
  [1, [2], 3],
  [4, [5, 6]],
  [7, 8, 9, [10, [11, [12, 13, [14, 15]]]]],
];

Array.prototype.customFlat = function (depth = Infinity) {
  let a = [];
  let ar = this;
  for (let each of ar) {
    if (depth > 0 && Array.isArray(each)) {
      a.push(...this.customFlat.call(each, depth - 1));
    } else {
      a.push(each);
    }
  }
  return a;
};

//console.log(array.flat(5));

console.log(array.customFlat(1));
