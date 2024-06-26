const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.addEventListener("DOMContentLoaded", function () {
  var inputButton = document.querySelector(
    '.placeholder-butt input[type="button"]',
  );
  var placeholderText = "Chat with us";
  // Set placeholder text initially
  inputButton.value = placeholderText;

  inputButton.addEventListener("click", function () {
    if (inputButton.value === placeholderText) {
      inputButton.value = "";
      inputButton.classList.add("has-value");
    }
  });

  inputButton.addEventListener("blur", function () {
    if (inputButton.value === "") {
      inputButton.value = placeholderText;
      inputButton.classList.remove("has-value");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var inputButton = document.querySelector(
    '.placeholder-butt2 input[type="button"]',
  );
  var placeholderText = "Log Out";
  // Set placeholder text initially
  inputButton.value = placeholderText;
  inputButton.addEventListener("click", function () {
    if (inputButton.value === placeholderText) {
      inputButton.value = "";
      inputButton.classList.add("has-value");
    }
  });

  inputButton.addEventListener("blur", function () {
    if (inputButton.value === "") {
      inputButton.value = placeholderText;
      inputButton.classList.remove("has-value");
    }
  });
});

//

// cart heart click color

document.querySelectorAll(".cart-heart").forEach((cartHeart) => {
  let isOriginalColor = true;
  cartHeart.addEventListener("click", function (event) {
    event.preventDefault();

    if (isOriginalColor) {
      cartHeart.style.color = "red";
    } else {
      cartHeart.style.color = "#484a47";
    }
    isOriginalColor = !isOriginalColor;
  });
});
/***********************************************************/

// filters open all close all

const leftIcon = document.querySelector(".filters-left-icon");
const filters = document.querySelector(".filters-items");
const gridFilters = document.querySelector(".grid-seller-filters");
const filtersIcon = document.querySelector(".filters-icon");
let isorigina = true;
leftIcon.addEventListener("click", function (event) {
  event.preventDefault();
  if (isorigina) {
    filters.style.display = "none";
    gridFilters.style.gridTemplateColumns = "1fr";
    leftIcon.classList.add("hidden");
    filtersIcon.style.top = "81%";
    filtersIcon.style.left = "50%";
  } else {
    filters.style.display = "block";
    gridFilters.style.gridTemplateColumns = "";
    filtersIcon.style.top = "";
    filtersIcon.style.left = "";
  }
  isorigina = !isorigina;
});

/*********************************************************************************/

// filters up button - filters-item
// const iconUpFilters = document.querySelector(".icon-up-filters");
// const filtersItem = document.querySelector(".filters-item");
// const filtersDown = document.querySelector(".icon-down-filters");
//
// let boolfiletrs = true;
// iconUpFilters.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (boolfiletrs) {
//     filtersItem.style.display = "none";
//     boolfiletrs = false;
//   } else {
//     filtersItem.style.display = "block";
//     boolfiletrs = true;
//   }
// });
//

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-filter");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const filterItem = button.parentElement.nextElementSibling;
      const icon = button.querySelector("ion-icon");

      if (filterItem.style.display === "none" || !filterItem.style.display) {
        filterItem.style.display = "block";
        icon.setAttribute("name", "chevron-up-outline");
      } else {
        filterItem.style.display = "none";
        icon.setAttribute("name", "chevron-down-outline");
      }
    });
  });
});
