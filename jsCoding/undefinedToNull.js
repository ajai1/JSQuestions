const ar = [1, 2, null, [3, 50, undefined, 60, [70, undefined]], 4, 5];
const ob = {
  a: undefined,
  b: 2,
  c: {
    d: undefined,
    e: {
      f: undefined,
      g: 22,
      h: null,
    },
  },
};

Object.prototype.undefinedToNull = function () {
  if (
    this == null ||
    this == undefined ||
    this instanceof String ||
    this instanceof Number ||
    this instanceof Boolean
  ) {
    console.log("Not a valid type");
    return;
  }
  if (typeof this == "object") {
    if (Array.isArray(this)) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
          this[i] = null;
          continue;
        }
        if (typeof this[i] == "object") {
          this[i] = this[i].undefinedToNull();
        }
      }
    } else {
      for (let key in this) {
        if (this[key] == undefined) {
          this[key] = null;
          continue;
        }
        if (typeof this[key] == "object") {
          this[key] = this[key].undefinedToNull();
        }
      }
    }
  }
  return this;
};

var a = [1];

const ans = ob.undefinedToNull();

console.log(ans);
console.log("actual == > ", ob, ob === ans);
