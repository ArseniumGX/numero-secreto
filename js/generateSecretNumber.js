const minValue = 1;
const maxValue = 1000;

const secretNumber = generateSecretNumber();

function generateSecretNumber() {
	return parseInt(Math.random() * maxValue + 1);
}

document.querySelector("#menor-valor").textContent = minValue;
document.querySelector("#maior-valor").textContent = maxValue;
