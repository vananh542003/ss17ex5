const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
 
  if (display.value === "") return;

  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return;

  display.value += operator;
}


function clearDisplay() {
  display.value = "";
}


function calculate() {
  try {
    if (display.value.includes("/0")) {
      throw new Error("Không được chia cho 0");
    }

    const result = eval(display.value);

    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Biểu thức không hợp lệ");
    }

    display.value = result;
  } catch (error) {
    alert(error.message);
    display.value = "";
  }
}
