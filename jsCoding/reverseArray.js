const arr = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    /*     let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp; */
    l++;
    r--;
  }
  return arr;
}

console.log(reverseArrayInPlace(arr));
