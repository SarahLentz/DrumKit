// *** My (working) solution before learning instructor's solution
// for (i=0;i<8;i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }

// ***Instructor solution (Using the drum class selector)***

for (i=0;i < document.querySelectorAll(".drum").length; i++) {
// *** Detect mouse clicks on drum buttons.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);   // Use the variable created above to turn the innerHTML of the ".drum" button clicked on into the input parameter for the makeSound function.
    buttonAnimation(buttonInnerHTML); // Do the same to call the buttonAnimation function, triggered by the same action.
  });
}

// *** Detect keyboard presses corresponding to drum letters. ***
  document.addEventListener("keydown",function(event) {
    makeSound(event.key);   // Use the event detected (the key press) to identify the key value and use it as the input parameter if one of the letter keys (for the drums) is pushed.
    buttonAnimation(event.key); // Do the same to call the buttonAnimation function, triggered by the same action.
  });

function makeSound(key) {   // function(<function name>(input parameter))
  switch(key){              // Run switch statement using the input parameter.
    case "w":
      var audio = new Audio('tom-1.mp3');
      audio.play();
    break;
    case "a":
      audio = new Audio('tom-2.mp3');
      audio.play();
    break;
    case "s":
      audio = new Audio('snare.mp3');
      audio.play();
    break;
    case "d":
      audio = new Audio('tom-3.mp3');
      audio.play();
    break;
    case "j":
      audio = new Audio('tom-4.mp3');
      audio.play();
    break;
    case "k":
      audio = new Audio('kick-bass.mp3');
      audio.play();
    break;
    case "l":
      audio = new Audio('crash.mp3');
      audio.play();
    break;
    default:
      console.log(buttonInnerHTML);
    }

  }

 function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }
