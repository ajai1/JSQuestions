const ar = [1, 2, 3, 5, 7, 8, 10];

function binarySearch(ar, target) {
  let i = 0;
  let j = ar.length - 1;
  while (i <= j) {
    let mid = Math.round((j + i) / 2);
    if (ar[mid] == target) {
      return mid;
    } else if (ar[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
}

const bindex = binarySearch(ar, -4);

console.log(bindex, ar[bindex]);
