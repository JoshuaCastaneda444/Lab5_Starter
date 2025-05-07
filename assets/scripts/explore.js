// explore.js

window.addEventListener('DOMContentLoaded', init);

// yes I know, but I need to put it somewhere the event listeners can access
let voices = [];

function populate_voice_list() {
  const synth = window.speechSynthesis;
  const voice_select = document.getElementById("voice-select");
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voice_select.appendChild(option);
  }
}

function init() {
  const synth = window.speechSynthesis;
  const voice_select = document.getElementById("voice-select");
  const input_text = document.getElementById("text-to-speak");
  const input_button = document.querySelector("button");
  const face_image = document.querySelector("img");

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populate_voice_list;
  }

  if (input_text != null && input_button != null && voice_select != null && face_image != null) {
    input_button.onclick = () => {
      const utterance = new SpeechSynthesisUtterance(input_text.value);
      const selected_voice = voice_select.selectedOptions[0].getAttribute("data-name");
      
      for (const voice of voices) {
        if (voice.name === selected_voice) utterance.voice = voice;
      }

      utterance.onstart = function () {
        face_image.src = "assets/images/smiling-open.png"
      };

      utterance.onend = function () {
        face_image.src = "assets/images/smiling.png";
      };

      synth.speak(utterance); 
    }
  }
}