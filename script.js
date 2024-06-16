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
