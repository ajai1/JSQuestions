const obj = {
  name: "ajai",
  address: {
    "door no": 1,
    landmark: "near temple",
    area: {
      steet: "1st cross",
      city: "bangalore",
      state: "karnataka",
    },
  },
  contact: 88123892,
};

Object.prototype.flatenObject = function () {
  let object = {};
  let obj = this;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] == "object") {
        let flattenedObject = this.flatenObject.call(obj[key]);
        for (let fKey in flattenedObject) {
          if (flattenedObject.hasOwnProperty(fKey))
            object[`${key}_${fKey}`] = flattenedObject[fKey];
        }
      } else {
        object[key] = obj[key];
      }
    }
  }
  return object;
};

console.log(obj.flatenObject());
