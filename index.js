let buttons = document.querySelectorAll(".btn");

document.querySelector(".drop").addEventListener("click", () => {
  if (buttons[0].classList.contains("hidden")) {
    buttons.forEach((button) => {
      button.classList.remove("hidden");
    });

    document.querySelectorAll(".color").forEach((button) => {
      button.classList.remove("hidden");
    });
  } else {
    buttons.forEach((button) => {
      button.classList.add("hidden");
    });

    document.querySelectorAll(".color").forEach((button) => {
      button.classList.add("hidden");
    });
  }
});

document.querySelectorAll(".option-div").forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.add("hidden");
    });

    document.querySelectorAll(".color").forEach((button) => {
      button.classList.add("hidden");
    });

    document.querySelector(".drop").innerHTML = button.innerHTML;
    document.querySelector(".drop div").classList.remove("hidden");
    document.querySelector(".drop button").classList.remove("hidden");
  });
});
