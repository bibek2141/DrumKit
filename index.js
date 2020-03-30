/*When it is clicked Event listener*/
var drumList = document.querySelectorAll(".drum").length;

for(var i =0; i<drumList; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick()
{
  buttonInnerHtml = this.innerHTML;
  sound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

/*When key is pressed*/
document.addEventListener("keypress", keyEvent);

function keyEvent(event){
  sound(event.key);
  buttonAnimation(event.key);
}

/*Sound for each set*/
function sound(key){
  switch (key)
  {
    case "z":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;
    case "x":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;
    case "c":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;
    case "g":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "i":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "o":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "p":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;
  default: console.log(key);
  }
}


/*When button is clicked shows transparency*/
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
