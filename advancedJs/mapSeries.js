/**
 * mapSeries is a function that processes an array of items sequentially, meaning it processes one item at a time,
 * waiting for the current task to complete before moving on to the next one. This is different from mapLimit,
 * which processes multiple tasks concurrently, as mapSeries guarantees that each task completes in order.
 */

const asyncCallback = (value) => {
  const delay = Math.floor(Math.random() * 10000);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolving async Callback ${value} delay ${delay}`);
    }, delay);
  });
};

const mapSeries = (arr, asyncCallback) => {
  return new Promise(async (resolve, reject) => {
    const out = [];
    for (let el of arr) {
      const res = await asyncCallback(el);
      out.push(res);
    }
    resolve(out);
  });
};

mapSeries([1, 2, 3, 4, 5], asyncCallback).then((res) => {
  console.log("______ Mapped ______", res);
});
