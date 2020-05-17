
function showIt() {
  document.getElementById("another-objector1").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
  document.getElementById("objector").style.visibility = "visible";
}
setTimeout("showIt2()", 6000); // after 5 secs

function showIt3() {
  document.getElementById("first").style.visibility = "visible";
}
setTimeout("showIt3()", 12000); // after 5 secs

function showIt4() {
  document.getElementById("epilogue").style.visibility = "visible";
}
setTimeout("showIt4()", 14000); // after 5 secs
