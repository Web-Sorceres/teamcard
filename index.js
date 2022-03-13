let i = 0
let text = 'We are the enchanters of the Web.'
var speed = 50

function typeWriter() {
  if (i < text.length) {
    document.getElementById("about").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()