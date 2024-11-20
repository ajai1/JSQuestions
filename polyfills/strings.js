String.prototype.myTrim = function () {
  let newStr = "";
  let fromStartFoundValidChar = false;
  for (let i of this) {
    if (i != " " || fromStartFoundValidChar) {
      fromStartFoundValidChar = true;
      newStr += i;
    }
  }
  let fromEndFoundValidChar = false;
  let processedString = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] != " " || fromEndFoundValidChar) {
      fromEndFoundValidChar = true;
      processedString = newStr[i] + processedString;
    }
  }

  return processedString;
};

const str = "   hello world   -   ";

console.log(str.myTrim());
