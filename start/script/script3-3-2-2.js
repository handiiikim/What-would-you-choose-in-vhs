
function showIt() {
  document.getElementById("mother").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
  document.getElementById("you").style.visibility = "visible";
}
setTimeout("showIt2()", 4000); // after 5 secs

function showIt3() {
  document.getElementById("epilogue").style.visibility = "visible";
}
setTimeout("showIt3()", 7000); // after 5 secs
