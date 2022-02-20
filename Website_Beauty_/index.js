 $("h6").ready(function(){
  $("h6").mouseenter(function(){
    $("h6").css("background-color", "LightBlue");
  });
  $("h6").mouseleave(function(){
    $("h6").css("background-color", "Pink");
  });
});

$("h6").css("fontSize", "50px");
$("h6").css("text-align", "center");


$(document).ready(function(){
  $("p").one("click", function(){
    $(this).animate({fontSize: "+=6px"});
  });
});

$(document).ready(function(){
  $("h2").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "LightBlue");
  });
});

const person = {
  age: 17,
};

document.getElementById("demo").innerHTML = person["age"] + " years old.";

function hourglass() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
      a.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf253;";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);
