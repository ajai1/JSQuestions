const person1 = {
  firstName: "ajai",
  lastName: "kumar",
};

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, ...args) {
  context.fn = this;
  context.fn(args);
};

Function.prototype.myBind = function (context = {}, ...args) {
  context.fn = this;
  return function (...args2) {
    return context.fn(...args, ...args2);
  };
};

function printFullName(senior, we) {
  console.log(this.firstName + " " + this.lastName, senior, we);
}

const bound = printFullName.myBind(person1, "ye");
bound("mr");
