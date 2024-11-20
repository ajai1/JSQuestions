class MyPromise {
  state = "pending";
  value = null;
  thenCbs = [];
  catchCbs = [];

  constructor(executorFn) {
    executorFn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(result) {
    if (this.state != "pending") return;
    this.state = "fulfilled";
    this.value = result;

    this.thenCbs.forEach((thenCb) => {
      thenCb(this.value);
    });
    this.thenCbs = [];
    return this;
  }

  reject(error) {
    if (this.state != "pending") return;
    this.state = "rejected";
    this.value = error;

    this.catchCbs.forEach((catchCb) => {
      catchCb(this.value);
    });
    this.catchCbs = [];
    throw new Error(this.value);
  }

  then(successCb, errorCb) {
    if (this.state == "fulfilled" && successCb) {
      successCb(this.value);
    } else if (this.state == "rejected" && errorCb) {
      errorCb(this.value);
    } else if (this.state == "pending") {
      if (successCb) this.thenCbs.push(successCb);
      if (errorCb) this.catchCbs.push(errorCb);
    }
    return this;
  }

  catch(errorCb) {
    if (this.state == "rejected" && errorCb) {
      errorCb(this.value);
    } else if (errorCb) {
      this.catchCbs.push(errorCb);
    }
    return this;
  }
}

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 5000);
  setTimeout(() => {
    reject("Hi this is error");
  }, 1000);
});

p.then((res) => {
  console.log("This is from then block -- ", res);
})
  .then((res) => {
    console.log("Second then block ", res);
  })
  .then(
    (res) => {
      console.log("After Catch Res", res);
    },
    (err) => {
      console.log("After Catch Error", err);
    }
  )
  .catch((err) => {
    console.log("This is an Error ", err);
  });

p.then((res) => {
  console.log("Separate Then Block, ", res);
});
