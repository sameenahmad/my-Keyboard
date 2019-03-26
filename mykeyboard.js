let buttons = document.getElementsByClassName("button");

window.addEventListener("keydown", function checkKeyPress(event) {
  let pushButton = event.key;
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
  for (let i = 0; i < buttons.length; i++) {
    let btnText = buttons[i].innerText;
    btnText = btnText.toLowerCase();

    if (btnText === keyValue) {
      buttons[i].style.transform = "scale(1.1)";
      setTimeout(() => {
        buttons[i].style.transform = "scale(1)";
      }, 300);
    }
  }
}
