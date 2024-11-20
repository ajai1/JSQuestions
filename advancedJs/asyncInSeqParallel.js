//Execute Async Functions in Series

const async1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async 1");
  }, 2500);
});
const async2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async 2");
  }, 1500);
});
const async3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async 3");
  }, 3000);
});
const async4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async 4");
  }, 400);
});
const async5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async 5");
  }, 5000);
});

const executeInSequenceUsingReduce = (asyncFunctions) => {
  asyncFunctions.reduce((a, b, i) => {
    return a.then((res) => {
      console.log("->->->->-");
      console.log("-------> ", res);
      if (i == asyncFunctions.length - 1) {
        b.then((res) => console.log("-------> ", res));
      }
      return b;
    });
  });
};

executeInSequenceUsingReduce([async1, async2, async3, async4, async5]);

const executeInSequenceUsingForOf = async (asyncFunctions) => {
  for (let aFun of asyncFunctions) {
    console.log("->->->->-");
    const result = await aFun;
    console.log("-----> ", result);
  }
};
