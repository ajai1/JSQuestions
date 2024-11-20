class SubscribeInstance {
  constructor() {
    if (SubscribeInstance._instance) {
      return SubscribeInstance._instance;
    }
    SubscribeInstance._instance = this;
  }

  subscriberCallbacks = new Map();

  subscribe(name, callback) {
    if (!this.subscriberCallbacks.get(name)) {
      this.subscriberCallbacks.set(name, [callback]);
    } else {
      this.subscriberCallbacks.get(name).push(callback);
    }
  }

  publish(name, value) {}

  publishAll(value, ignoreList = []) {
    const ignoreSet = new Set(ignoreList);
    const allCallbacks = this.subscriberCallbacks.entries();
    for (let [subscriberName, callbacks] of allCallbacks) {
      if (ignoreSet.has(subscriberName)) continue;
      callbacks.forEach((callback) => {
        callback(value);
      });
    }
  }
}

const subscriberInstance = new SubscribeInstance();

subscriberInstance.subscribe("one", (value) => {
  console.log("Listening to Subscription One !!! ", value);
});

subscriberInstance.subscribe("two", (value) => {
  console.log("Listening to Subscription two !!! ", value);
});

const subscriberInstance3 = new SubscribeInstance();

subscriberInstance3.subscribe("third", (value) => {
  console.log("Listening to Subscription third !!! ", value);
});

subscriberInstance.publishAll("Publishing Message 1");
subscriberInstance.publishAll("Publishing Message 2", ["two"]);
console.log("_____________________________");
subscriberInstance3.publishAll("Publishing Message 4", []);
