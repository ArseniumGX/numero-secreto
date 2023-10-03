const chuteElement = document.querySelector("#chute");

window.SpeechRecognition =
	window.SpeechRecognitionResult || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

function onSpeak(event) {
	const chute = event.results[0][0].transcript;
	exibirChute(chute);
	validarChute(chute);
}

function exibirChute(chute) {
	chuteElement.innerHTML = `
   <div>Você disse</div>
   <span class="box">${chute}</span>`;
}
