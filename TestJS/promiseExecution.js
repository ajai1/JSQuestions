const p = new Promise((resolve, rej) => {
  console.log("1");
  resolve(2);
  console.log("Below resolve");
})
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  });

console.log("Outside");
