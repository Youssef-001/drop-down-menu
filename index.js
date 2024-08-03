document.querySelector(".drop").addEventListener("click", () => {
  let buttons = document.querySelectorAll(".btn");

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
