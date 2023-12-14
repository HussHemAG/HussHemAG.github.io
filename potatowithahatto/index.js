window.onload = function () {
  var input = document.querySelector("input");
  var inpbutton = document.querySelector("#nextButton");
  var getMessagesSection = document.querySelector(".bottom-8");

  input.addEventListener("input", function () {
    if (input.value.trim()) {
      inpbutton.classList.remove("hidden");
      inpbutton.classList.add("flex");
    } else {
      inpbutton.classList.remove("flex");
      inpbutton.classList.add("hidden");
    }
  });

  input.addEventListener("focus", function () {
    getMessagesSection.style.display = "none";
  });

  input.addEventListener("blur", function () {
    getMessagesSection.style.display = "block";
  });
};
