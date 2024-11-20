const str = "this is a stringfind the longest word";

function findLongest(str) {
  const splitted = str.split(" ");
  let maxLength = 0;
  let stringStored = "";
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > maxLength) {
      maxLength = splitted[i].length;
      stringStored = splitted[i];
    }
  }
  return `${stringStored} length is ${maxLength}`;
}

console.log(findLongest(str));
