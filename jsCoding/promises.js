function promise1(value) {
  return new Promise((resolve, reject) => {
    if (value == "one") {
      resolve("resolved one");
    } else {
      reject("rejected one");
    }
  });
}
function promise2(value) {
  return new Promise((resolve, reject) => {
    if (value == "two") {
      resolve("resolved two");
    } else {
      reject("rejected two");
    }
  });
}
/* 
promise1("one")
  .then((result) => {
    if (result == "resolved one") {
      console.log(result);
      return promise2("two");
    }
  })
  .then((result) => {
    console.log("result ", result);
  })
  .finally(() => {
    console.log("Finally");
  });


   */
/* 
promise1("on")
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((err) => {
    console.log("errror", err);
    return "Passed " + err;
  })
  .finally(() => {
    console.log("finally !!!");
    return "From Finally";
  })
  .then((res) => {
    console.log("Result ", res);
  })
  .catch((err) => {
    console.log("Err", err);
  });
 */

promise1("on")
  .finally(() => {
    console.log(
      "This finally runs after the promise settles, regardless of result."
    );
  })
  .then((res) => {
    console.log("First then:", res);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log(
      "This finally also runs after everything else, regardless of result."
    );
  });
