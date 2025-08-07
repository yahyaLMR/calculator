let display = document.getElementById("display");
let nums = document.querySelectorAll(".num");

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (num.innerText === "C") {
      clear();
    } else if (num.innerText === "Del") {
      del();
    } else if (num.innerText === "=") {
      calculate();
    } else if (num.innerText === "X") {
      display.value = display.value + "*";
    } else {
      display.value = display.value + num.innerText;
    }
  });
});

function clear() {
  display.value = "";
}
function del() {
  display.value = display.value
    .split("")
    .slice(0, display.value.split("").length - 1)
    .join("");
}
function calculate() {
  display.value = eval(display.value);
}
