var buttons = document.getElementsByClassName("button");

window.addEventListener("keydown", function checkKeyPress(event) {
  var pushButton = event.key;
  checkBtn(pushButton);

  switch (pushButton) {
    case "a":
      document.getElementById("a").play();
      break;
    case "s":
      document.getElementById("s").play();
      break;
    case "d":
      document.getElementById("d").play();
      break;
    case "f":
      document.getElementById("f").play();
      break;
    case "g":
      document.getElementById("g").play();
      break;
    case "h":
      document.getElementById("h").play();
      break;
    case "i":
      document.getElementById("i").play();
      break;
    case "j":
      document.getElementById("j").play();
      break;
    case "k":
      document.getElementById("k").play();
      break;
    default: {
      // do nothing
      return;
    }
  }
});

function checkBtn(keyValue) {
  for (i = 0; i < buttons.length; i++) {
    var btnText = buttons[i].innerText;
    btnText = btnText.toLowerCase();

    if (btnText === keyValue) {
      buttons[i].style.background = "hotpink";
    }
  }
}
