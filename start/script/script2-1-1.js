
function showIt() {
  document.getElementById("first").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
  document.getElementById("epilogue").style.visibility = "visible";
}

setTimeout("showIt2()", 4000); // after 1 sec
