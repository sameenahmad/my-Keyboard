let buttons = document.getElementsByClassName("button");

window.addEventListener("keydown", function checkKeyPress(event) {
  let pushButton = event.key;
  checkBtn(pushButton);
  const curElem = document.getElementById(pushButton);
  if (curElem) curElem.play();
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
