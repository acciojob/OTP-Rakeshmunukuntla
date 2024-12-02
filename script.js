document.addEventListener("DOMContentLoaded", () => {
  const codes = document.querySelectorAll(".code");

  codes.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < codes.length - 1) {
        codes[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && input.value === "" && index > 0) {
        codes[index - 1].focus();
      }
    });
  });
});
