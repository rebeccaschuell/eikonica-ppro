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

// var blueColor = document.querySelector(".change-color");

// var changeBlue = function () {
//   blueColor.classList.add("is-blue");
// };

// blueColor.addEventListener("click", changeBlue);

// document.getElementById("change-color").addEventListener("click", function () {
//   var text = document.getElementById("change-color");
//   text.classList.toggle("color-change");
// });

var frLanguage = document.querySelector(".fr-language");
var deLanguage = document.querySelector(".de-language");

var changeWhite = function () {
  frLanguage.classList.remove("is-blue");
  frLanguage.classList.add("is-white");
  deLanguage.classList.remove("is-white");
  deLanguage.classList.add("is-blue");
};

deLanguage.addEventListener("click", changeWhite);

var changeBlue = function () {
  deLanguage.classList.remove("is-blue");
  deLanguage.classList.add("is-white");
  frLanguage.classList.remove("is-white");
  frLanguage.classList.add("is-blue");
};

frLanguage.addEventListener("click", changeBlue);
