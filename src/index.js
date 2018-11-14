import $ from "jquery";

$("button").click(function() {
  var input_waarde = $("input").val();
  document.getElementById("input_waarde").innerHTML = input_waarde;
  localStorage.setItem("input", input_waarde);
});
