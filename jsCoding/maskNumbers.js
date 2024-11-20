/**

	I need to leave the first number and mask all the other numbers leave the last four numbers
  for loop from last char keep searching 4 numbers and then start masking, leave the first character
	
	If not a number move to the next character
	If length of the str is less than 6 return
	If non string type return

*/

const str = "2663-3242-3244-5672";

String.prototype.mask = function (retainFirst = 0, retainLast = 0) {
  let str = "";
  let lastIndex = this.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    if (/\d/.test(this.charAt(i))) {
      if (
        lastIndex - i <= lastIndex - retainLast &&
        lastIndex - i >= retainFirst
      ) {
        str = str + "#";
      } else {
        str = str + this.charAt(i);
      }
    } else {
      str = str + this.charAt(i);
    }
  }
  return str;
};

const masked = str.mask(1, 2);
console.log(masked);
