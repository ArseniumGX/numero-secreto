function validarChute(chute) {
	const numero = +chute;

	if (chuteInvalido(numero)) {
		return;
	}

	if (numeroForaRange(numero)) {
		return;
	}

	if (numero === secretNumber) {
		document.body.innerHTML = `<h2>Parabéns! Voce acertou.</h2><h3>O número secreto era ${secretNumber}</h2>`;
	} else if (numero > secretNumber) {
		chuteElement.innerHTML = `
         <div>O número secreto é <i class="fa-solid fa-down-long"></i></div>
      `;
	} else
		chuteElement.innerHTML = `
         <div>O número secreto é <i class="fa-solid fa-up-long"></i></div>
       `;
}

function chuteInvalido(numero) {
	return Number.isNaN(numero);
}

function numeroForaRange(numero) {
	return numero > maxValue || numero < minValue;
}
