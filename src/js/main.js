const accordionItems = document.querySelectorAll(".program-accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".program-accordion-title");
  const content = item.querySelector(".program-accordion-content");

  header.addEventListener("click", () => {
    content.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
