//mapLimit is a function that limits the number of asynchronous tasks running concurrently. Given an array of items,
//a limit, and an async function,
//it processes each item using the async function but ensures that only limit tasks are running at a time.

const asyncCallback = (value) => {
  const delay = Math.floor(Math.random() * 5000);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolving async Callback ${value} delay ${delay}`);
    }, delay);
  });
};

const mapLimit = (arr, limit, asyncCallback) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    let tempLimit = 0;
    const out = [];
    //At a time I can make upto limit asyncCallbacks
    //then wait for the limits to get back to 0 and then instantiate the next calls
    function next() {
      const t = [];
      if (index >= arr.length) resolve(out);
      else {
        while (index < arr.length && tempLimit < limit) {
          tempLimit++;
          asyncCallback(arr[index++])
            .then((value) => {
              t.push(value);
            })
            .finally(() => {
              tempLimit--;
              if (tempLimit == 0) {
                out.push(t);
                next();
              }
            });
        }
      }
    }

    next();
  });
};

mapLimit([1, 2, 3, 4, 5], 2, asyncCallback).then((res) => {
  console.log("______ Mapped ______", res);
});
