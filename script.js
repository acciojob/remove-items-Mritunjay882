//your JS code here. If required.
// script.js
function removeColor() {
  var select = document.getElementById("colorSelect");
  var selectedOption = select.selectedIndex;
  select.remove(selectedOption);
  alert("Color removed!");
}
