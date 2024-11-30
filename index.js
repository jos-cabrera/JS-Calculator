let num1 = 0;
let num2 = 0;
let operator = "";
let lastOperation = "";

const barContent = document.getElementById("bar-content");
barContent.disabled = true;
barContent.value = 0;

function insertNumber(num) {
	if (lastOperation === "=") {
		barContent.value = num;
		lastOperation = "";
	} else if (barContent.value !== "0") {
		barContent.value += num;
	} else if (num !== 0) {
		barContent.value = num;
	}
}

function insertOperator(op) {
	switch (op) {
		case "+":
		case "-":
		case "*":
		case "/":
			num1 = barContent.value;
			operator = op;
			barContent.value = "0";
			break;
		case ".":
			if (!barContent.value.includes(".")) {
				barContent.value += op;
			}
			break;
		case "C":
			resetCalculator();
			break;
		case "CE":
			barContent.value = "0";
			break;
		case "+/-":
			barContent.value = String(Number(barContent.value) * -1);
			break;
		case "=":
			calculateResult();
			break;
	}
}

function resetCalculator() {
	barContent.value = "0";
	num1 = 0;
	num2 = 0;
	operator = "";
	lastOperation = "";
}

function calculateResult() {
	lastOperation = "=";
	num2 = barContent.value;
	const result = performOperation(Number(num1), Number(num2), operator);
	if (result !== undefined) {
		barContent.value = result;
	}
}

function performOperation(n1, n2, op) {
	switch (op) {
		case "+":
			return n1 + n2;
		case "-":
			return n1 - n2;
		case "*":
			return n1 * n2;
		case "/":
			return n2 !== 0 ? n1 / n2 : "Error";
	}
}
