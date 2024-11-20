Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const ar = [1, 2, 3];

const tArr = ar.myMap((each, i, arr) => {
  return each * 2 * i;
});

//console.log(tArr);

//------------------------------------------------------------------------------------------------------

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    let predicate = callback(this[i], i, this) || false;
    if (predicate) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const unFiltered = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const filtered = unFiltered.myFilter((item, i, arr) => {
  if (item.id == 3 || i == 4) {
    return false;
  }
  return true;
});

//console.log("Filtered ", filtered);

//--------------------------------------------------------------------------------------------------------

Array.prototype.myReduce = function (callback, initial) {
  let accumlator = initial;
  for (let i = 0; i < this.length; i++) {
    if (accumlator) {
      accumlator = callback(accumlator, this[i]);
    } else {
      accumlator = this[i];
    }
  }
  return accumlator;
};

const toReduce = [1, 2, 3, 4, 5];

const reduced = toReduce.myReduce((acc, cur) => {
  acc.unshift(cur);
  return acc;
}, []);

//console.log("Reduced Array = ", reduced);

// -------------------------------------------------------------------------------------------------------------

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let predicate = callback(this[i], i, this);
    if (predicate) {
      return this[i];
    }
  }
  return undefined;
};

const toFind = [{ id: 123 }, { id: 234 }, { id: 567 }, { id: 899 }];

const found = toFind.myFind((item, i, arr) => {
  if (item.id == 567) return true;
  else return false;
});

console.log("Found element ", found);

// -------------------------------------------------------------------------------------------------------------------

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
