const arr = [1, 1, 2, 3, 5, 5, 6, 1, 2, 5];

/* const set = new Set(arr);
console.log(Array.from(set), set); */

function removeDuplicates(arr) {
  const track = {};
  const newArr = [];

  for (let each of arr) {
    if (track[each]) {
      continue;
    } else {
      track[each] = true;
      newArr.push(each);
    }
  }

  return newArr;
}

function removeDuplicatesInPlace(arr) {
  arr.sort((a, b) => a - b);

  let lastUniqueIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[lastUniqueIndex]) {
      lastUniqueIndex++;
      arr[lastUniqueIndex] = arr[i];
    }
  }

  arr.length = lastUniqueIndex + 1;
  return arr;
}

console.log(removeDuplicatesInPlace(arr));
