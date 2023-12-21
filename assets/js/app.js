const display = document.querySelector("#display");

function appendToDisplay(key) {
  display.value += key;
}

function calculate() {
  try {
    if (display.value != "") {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
