const inputField = document.querySelector(".input-section");
const checkInputs = document.querySelectorAll(".check-section-inputs");
const passwordFieldOne = document.querySelector("#input-password-one");
const passwordFieldTwo = document.querySelector("#input-password-two");
const btnShowHide = document.querySelector("#show-hide-btn");
const lowerCase = document.querySelector("#lowercase-check");
const toUpperCase = document.querySelector("#uppercase-check");
const includesNumber = document.querySelector("#number-check");
const atLeast10Char = document.querySelector("#at-least-check");

inputField.addEventListener("input", checkForEqual);
btnShowHide.addEventListener("click", showHidePassword);

function checkForEqual() {
  const isEqual = document.querySelector("#equal-check");
  if (
    passwordFieldOne.value === passwordFieldTwo.value &&
    passwordFieldOne.value !== ""
  ) {
    isEqual.innerHTML = "✅";
  } else {
    isEqual.innerHTML = "❌";
  }
  checkForLowerCase();
  checkForUpperCase();
  checkForNumber();
  checkForAtLeast10Char();
}

const hasLowerCase = (str) => /[a-z]/.test(str);

const isUpperCase = (string) => /[A-Z]/.test(string);
const hasNumber = (string) => /[0-9]/.test(string);

function checkForLowerCase() {
  if (hasLowerCase(passwordFieldOne.value)) {
    lowerCase.innerHTML = "✅";
  } else {
    lowerCase.innerHTML = "❌";
  }
}

function checkForUpperCase() {
  if (isUpperCase(passwordFieldOne.value)) {
    toUpperCase.innerHTML = "✅";
  } else {
    toUpperCase.innerHTML = "❌";
  }
}

function checkForNumber() {
  if (hasNumber(passwordFieldOne.value)) {
    includesNumber.innerHTML = "✅";
  } else {
    includesNumber.innerHTML = "❌";
  }
}

function checkForAtLeast10Char() {
  if (passwordFieldOne.value.length >= 10) {
    atLeast10Char.innerHTML = "✅";
  } else {
    atLeast10Char.innerHTML = "❌";
  }
}

function showHidePassword() {
  if (passwordFieldOne.type === "text" && passwordFieldTwo.type === "text") {
    passwordFieldOne.type = "password";
    passwordFieldTwo.type = "password";
    btnShowHide.innerHTML = "Show password";
  } else if (
    passwordFieldOne.type !== "text" &&
    passwordFieldTwo.type !== "text"
  ) {
    passwordFieldOne.type = "text";
    passwordFieldTwo.type = "text";

    btnShowHide.innerHTML = "Hide password";
  }
}
