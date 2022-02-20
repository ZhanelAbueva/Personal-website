var numerberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numerberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
    case "🍋":
      var do1 = new Audio('sounds/do1.mp3');
      do1.play();
      break;
    case "🍒":
      var re = new Audio('sounds/re.mp3');
      re.play();
      break;
    case "🍏":
      var mi = new Audio('sounds/mi.mp3');
      mi.play();
      break;
    case "🍇":
      var fa = new Audio('sounds/fa.mp3');
      fa.play();
      break;
    case "🍊":
      var sol = new Audio('sounds/sol.mp3');
      sol.play();
      break;
    case "🍉":
      var lja = new Audio('sounds/lja.mp3');
      lja.play();
      break;
    case "❤️":
      var si = new Audio('sounds/si.mp3');
      si.play();
      break;
    }
  })
}

title.addEventListener("click", myFunction);

function myFunction() {
    alert ("Welcome to Zhanel's Personal Website!");
}
