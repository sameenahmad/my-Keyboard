var button = document.getElementsByClassName("button");
window.addEventListener("keydown", function checkKeyPress(event) {
  var pushButton = event.key;
  switch (pushButton) {
    case "a":
      console.log("Hello, I am a");
      checkBtn(pushButton);
      break;
    case "s":
      console.log("Hello, I am s");
      checkBtn(pushButton);
      break;
    case "d":
      console.log("Hello, I am d");
      checkBtn(pushButton);
      break;
    case "f":
      console.log("Hello, I am f");
      checkBtn(pushButton);
      break;
    case "g":
      console.log("Hello, I am g");
      checkBtn(pushButton);
      break;
    case "h":
      console.log("Hello, I am h");
      checkBtn(pushButton);
      break;
    case "i":
      console.log("Hello, I am i");
      checkBtn(pushButton);
      break;
    case "j":
      console.log("Hello, I am j");
      checkBtn(pushButton);
      break;
    default:
      console.log("Key not present");
  }
});
function checkBtn(keyvalue) {
  for (i = 0; i < button.length; i++) {
    var btnText = button.innerHTML;
    if (btnText == keyValue) {
      button.style.background = "pink";
    }
  }
}
