window.onload = function () {
  var input = document.querySelector("input");
  var inpbutton = document.querySelector("#nextButton");

  input.addEventListener("input", function () {
    if (input.value.trim()) {
      inpbutton.classList.remove("hidden");
      inpbutton.classList.add("flex");
    } else {
      inpbutton.classList.remove("flex");
      inpbutton.classList.add("hidden");
    }
  });
};
