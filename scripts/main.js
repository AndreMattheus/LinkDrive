document.addEventListener("DOMContentLoaded", () => {
  const searchFields = document.querySelectorAll("[data-search]");

  searchFields.forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  });
});
