var button = document.getElementsByClassName("button");
window.addEventListener("keydown", function checkKeyPress(event) {
  var pushButton = event.key;
  switch (pushButton) {
    case "a":
      console.log("Hello, I am a");
      //checkBtn(pushButton);
      document.getElementById('a').play();
      break;
    case "s":
      console.log("Hello, I am s");
      //checkBtn(pushButton);
      document.getElementById('s').play();
      break;
    case "d":
      console.log("Hello, I am d");
      //checkBtn(pushButton);
      document.getElementById('d').play();
      break;
    case "f":
      console.log("Hello, I am f");
      //checkBtn(pushButton);
      document.getElementById('f').play();
      break;
    case "g":
      console.log("Hello, I am g");
      //checkBtn(pushButton);
      document.getElementById('g').play();
      break;
    case "h":
      console.log("Hello, I am h");
      //checkBtn(pushButton);
      document.getElementById('h').play();
      break;
    case "i":
      console.log("Hello, I am i");
      //checkBtn(pushButton);
      document.getElementById('i').play();
      break;
    case "j":
      console.log("Hello, I am j");
     // checkBtn(pushButton);
      document.getElementById('j').play();
      break;
    default:
      alert("Key not present");
  }
});

/* function checkBtn(keyvalue) {
  for (i = 0; i < button.length; i++) {
    var btnText = button.innerHTML;
    if (btnText == keyValue) {
      button.style.background = "hotpink";
    }
  }
}
*/
