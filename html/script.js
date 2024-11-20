console.log("Script File Loaded");

function inputChange(event) {
  console.log(event.target.value);
  debouncedUpdateValue(event.target.value);
}

function updateValue(value) {
  let paragraph = document.getElementById("inputValue");
  paragraph.innerHTML = value;
}

const debouncedUpdateValue = debounce(updateValue, 100);

function debounce(cb, delay) {
  let timer;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

document.getElementById("inputElement2").addEventListener("keyup", (event) => {
  const {
    target: { value },
  } = event;
  console.log("=====> ", event, value);
  throttledFunction(value);
});

function updateValue2(value) {
  let paragraph = document.getElementById("inputValue2");
  paragraph.innerHTML = value;
}

const throttledFunction = throttle(updateValue2, 1000);

function throttle(cb, delay) {
  let lastTime;

  return function (...args) {
    let now = new Date().getTime();
    if (now - lastTime < delay) {
      return;
    }
    lastTime = now;
    cb(...args);
  };
}
