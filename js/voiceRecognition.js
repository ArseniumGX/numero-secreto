const chuteElement = document.querySelector("#chute");

window.SpeechRecognition =
	window.SpeechRecognitionResult || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
	exibirChute(event.results[0][0].transcript);
}

function exibirChute(chute) {
	chuteElement.innerHTML = `
   <div>Você disse</div>
   <span class="box">${chute}</span>`;
}
