// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_image = document.querySelector("img");
  const audio_player = document.querySelector("audio");

  const horn_select = document.getElementById("horn-select");
  if (horn_select != null && horn_image != null && audio_player != null) {
    horn_select.addEventListener("input", function() {
      switch (horn_select.value) {
        case "air-horn":
          horn_image.src = "assets/images/air-horn.svg";
          horn_image.alt = "Air horn selected";
          audio_player.src = "assets/audio/air-horn.mp3";
          break;
        case "car-horn":
          horn_image.src = "assets/images/car-horn.svg";
          horn_image.alt = "Car horn selected";
          audio_player.src = "assets/audio/car-horn.mp3";
          break;
        case "party-horn":
          horn_image.src = "assets/images/party-horn.svg";
          horn_image.alt = "Party horn selected";
          audio_player.src = "assets/audio/party-horn.mp3";
          break;
        default:
          horn_image.src = "assets/images/no-image.png";
          horn_image.alt = "No image selected";
          audio_player.src = "";
          break;
      }
    });
  }

  const volume_icon = document.querySelector("#volume-controls img");

  const volume_slider = document.getElementById("volume");
  if (volume_slider != null && volume_icon != null && audio_player != null) {
    volume_slider.addEventListener("input", function() {
      const volume = parseInt(volume_slider.value);
      if (volume == 0) {
        volume_icon.src = "assets/icons/volume-level-0.svg";
        volume_icon.alt = "Volume level 0";
      } else if (volume < 33) {
        volume_icon.src = "assets/icons/volume-level-1.svg";
        volume_icon.alt = "Volume level 1";
      } else if (volume < 67) {
        volume_icon.src = "assets/icons/volume-level-2.svg";
        volume_icon.alt = "Volume level 2";
      } else if (volume <= 100) {
        volume_icon.src = "assets/icons/volume-level-3.svg";
        volume_icon.alt = "Volume level 3";
      } else {
        volume_icon.src = "assets/icons/volume-level-0.svg";
        volume_icon.alt = "Volume level 0";
        audio_player.volume = 0;
        return;
      }

      audio_player.volume = volume / 100;
    });   
  }

  const jsConfetti = new JSConfetti();
  
  const play_button = document.querySelector("button");
  if (play_button != null && audio_player != null && horn_select != null) {
    play_button.addEventListener("click", function() {
      audio_player.play();
      if (horn_select.value == "party-horn") {
        jsConfetti.addConfetti();
      }
    });
  }
}