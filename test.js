const ar = [1, 2, 1, 5, 3, 7, 6, 9];
const t = 8;
const res = [];
const map = {};
let i = 0;
while (i < ar.length) {
  let comp = t - ar[i];
  if (map[ar[i]]) {
    while (map[ar[i]][1] > 0) {
      res.push([map[ar[i]][0], ar[i]]);
      map[ar[i]][1]--;
    }
    delete map[ar[i]];
  }
  if (map[comp]) {
    map[comp][1] = map[comp][1] + 1;
  } else {
    map[comp] = [ar[i], 1];
  }
  i++;
}

console.log(res);
