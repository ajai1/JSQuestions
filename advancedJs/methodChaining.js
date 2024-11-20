function createAmount() {
  let value = 0;
  return {
    tens: function (v) {
      value += v * 10;
      return this;
    },
    hundreds: function (v) {
      value += v * 100;
      return this;
    },
    thousands: function (v) {
      value += v * 1000;
      return this;
    },
    value: function () {
      return value;
    },
  };
}

const f = createAmount().tens(3).hundreds(4).tens(2).thousands(100).value();

console.log(f);
